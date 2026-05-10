import{_ as i,o as a,c as n,ai as e}from"./chunks/framework.ETupdKIa.js";const h=JSON.parse('{"title":"git init について","description":"","frontmatter":{},"headers":[],"relativePath":"til/Git/20240509_git_init.md","filePath":"til/Git/20240509_git_init.md"}'),t={name:"til/Git/20240509_git_init.md"};function l(p,s,r,o,c,d){return a(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="git-init-について" tabindex="-1">git init について <a class="header-anchor" href="#git-init-について" aria-label="Permalink to “git init について”">​</a></h1><h2 id="git-initすると何が起こるか。" tabindex="-1">git initすると何が起こるか。 <a class="header-anchor" href="#git-initすると何が起こるか。" aria-label="Permalink to “git initすると何が起こるか。”">​</a></h2><ul><li>git initするとカレントディレクトリに.gitディレクトリが作られる</li><li>カレントディレクトリがgit管理対象となる</li></ul><div class="language-sample"><button title="Copy Code" class="copy"></button><span class="lang">sample</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user$ mkdir work</span></span>
<span class="line"><span>user$ cd work</span></span>
<span class="line"><span>user$ git init</span></span>
<span class="line"><span>Initialized empty Git repository in /home/johndoe/work/.git/</span></span>
<span class="line"><span>user$ ls .git</span></span>
<span class="line"><span>HEAD  config  description  hooks  info  objects  refs</span></span>
<span class="line"><span>user$</span></span></code></pre></div><p>上記例の場合workが作業ディレクトリ、.gitがローカルリポジトリ</p><h2 id="ノンベアリポジトリとベアリポジトリ" tabindex="-1">ノンベアリポジトリとベアリポジトリ <a class="header-anchor" href="#ノンベアリポジトリとベアリポジトリ" aria-label="Permalink to “ノンベアリポジトリとベアリポジトリ”">​</a></h2><ul><li>git initにはオプションがある。</li><li><code>--bare</code>オプションをつけることでベアリポジトリを作成できる。</li><li>単に<code>git init</code>する場合に作成される<code>.git</code>はノンベアリポジトリ</li></ul><div class="language-non_bare"><button title="Copy Code" class="copy"></button><span class="lang">non bare</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user$ mkdir non_bare</span></span>
<span class="line"><span>user$ cd non_bare</span></span>
<span class="line"><span>user$ git init</span></span>
<span class="line"><span>user$ ls -a</span></span>
<span class="line"><span>. .. .git</span></span>
<span class="line"><span>user$</span></span></code></pre></div><p>.gitはノンベアリポジトリ</p><div class="language-bare"><button title="Copy Code" class="copy"></button><span class="lang">bare</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user$ mkdir bare.git</span></span>
<span class="line"><span>user$ cd bare.git</span></span>
<span class="line"><span>user$ git init --bare</span></span>
<span class="line"><span>user$ ls</span></span>
<span class="line"><span>HEAD  config  description  hooks  info  objects  refs</span></span>
<span class="line"><span>user$</span></span></code></pre></div><p>mkdirして作成したbare.gitがベアリポジトリ ベアリポジトリのディレクトリ名は~.gitとなる</p>`,11)])])}const k=i(t,[["render",l]]);export{h as __pageData,k as default};
