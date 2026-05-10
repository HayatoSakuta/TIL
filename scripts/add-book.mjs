import fs from 'node:fs/promises'
import path from 'node:path'

const amazonUrl = process.argv[2]
const category = process.argv[3] || 'tech'

if (!amazonUrl) {
  console.error('Amazon URL を指定してください')
  process.exit(1)
}

// Amazon URL から ISBN/ASIN 抽出
function extractIsbn(url) {
  const match = url.match(/\/dp\/([A-Z0-9]+)/)

  if (!match) {
    throw new Error('ISBN/ASIN を抽出できませんでした')
  }

  return match[1]
}

// ファイル名に使えない文字を除去
function sanitizeFileName(name) {
  return name
    .replace(/[\\/:*?"<>|]/g, '')
    .trim()
}

async function fetchBook(isbn) {
  const response = await fetch(`https://api.openbd.jp/v1/get?isbn=${isbn}`)

  if (!response.ok) {
    throw new Error('OpenBD API の取得に失敗しました')
  }

  const json = await response.json()
  const data = json[0]

  if (!data) {
    throw new Error('書籍情報が見つかりませんでした')
  }

  return {
    title: data.summary.title,
    author: data.summary.author,
    cover: data.summary.cover,
    isbn: data.summary.isbn,
  }
}

async function downloadImage(url, outputPath) {
  if (!url) {
    console.warn('表紙画像なし')
    return
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('画像ダウンロード失敗')
  }

  const arrayBuffer = await response.arrayBuffer()

  await fs.writeFile(outputPath, Buffer.from(arrayBuffer))
}

async function main() {
  const isbn = extractIsbn(amazonUrl)

  console.log(`ISBN: ${isbn}`)

  const book = await fetchBook(isbn)

  console.log(book)

  const safeTitle = sanitizeFileName(book.title)

  const bookDir = path.join(
    'docs',
    'books',
    category,
    safeTitle,
  )

  await fs.mkdir(bookDir, { recursive: true })

  const coverPath = path.join(bookDir, 'cover.jpg')

  await downloadImage(book.cover, coverPath)

  const markdown = `---
title: ${book.title}
author: ${book.author}
isbn: ${book.isbn}
cover: ./cover.jpg
status: unread
created_at: ${new Date().toISOString().slice(0, 10)}
tags:
  - ${category}
---

# メモ

`

  await fs.writeFile(
    path.join(bookDir, 'index.md'),
    markdown,
    'utf-8',
  )

  console.log('完了')
  console.log(bookDir)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
