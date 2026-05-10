---
title: "要素数0のArrayListはNULLというわけではないよ"
date: 2026-01-29
status: published
---

# 20260129_要素数0のArrayListはNULLというわけではないよ

要素数0のArrayListはNULLというわけではない。
この場合は「要素数0のArrayListオブジェクト」がヒープ領域に確保されており、
そこを参照しているため、「参照先が存在しない」ことを指すNULLとは意味が異なる。

```java
// この状況では、arrはNULLという値が代入されている。
// NULLとは、参照先を持たないことを表す値である。
ArrayList<String> arr = null;

// 要素数0のArrayListオブジェクトがヒープ領域に確保され、
// arrはそのオブジェクトを参照するため、arrはNULLではない。
arr = new ArrayList<>();
```