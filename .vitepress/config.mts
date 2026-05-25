import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/records/",
  
  title: "くるまでぶの記録簿",
  description: "技術、車、学び、思考の記録。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TIL', link: '/til/' },
      { text: 'Books', link: '/books/' }
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        scanStartPath: 'til',
        resolvePath: '/til/',
      },
      {
        documentRootPath: 'docs',
        scanStartPath: 'books',
        resolvePath: '/books/',
      }
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
