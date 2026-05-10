import{_ as a,o as n,c as e,ai as i}from"./chunks/framework.ETupdKIa.js";const d=JSON.parse('{"title":"ラムダ式について","description":"","frontmatter":{},"headers":[],"relativePath":"til/Spring/20240526_Lambda.md","filePath":"til/Spring/20240526_Lambda.md"}'),p={name:"til/Spring/20240526_Lambda.md"};function t(l,s,r,c,o,u){return n(),e("div",null,[...s[0]||(s[0]=[i(`<h1 id="ラムダ式について" tabindex="-1">ラムダ式について <a class="header-anchor" href="#ラムダ式について" aria-label="Permalink to “ラムダ式について”">​</a></h1><h2 id="汚いメモ" tabindex="-1">汚いメモ <a class="header-anchor" href="#汚いメモ" aria-label="Permalink to “汚いメモ”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>    Runnable runner = new Runnnable() { // ←ローカルクラスとして宣言していない</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            System.out.println(&quot;Hello World !&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>    Runnable ruuner = () -&gt; { System.out.println(&quot;Hello World!&quot;); };</span></span>
<span class="line"><span>    ruuner.run;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 変数runnerの型Runner(インターフェース)の具象クラスがruunerに代入される。</span></span>
<span class="line"><span>// {}の中身はrunメソッドの実装内容。</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public static void main(String[] args) {    </span></span>
<span class="line"><span>    method(()-&gt;{System.out.println(&quot;Hello World!&quot;);});</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// methodの引数rの型がRunnable(インターフェース)であることから型推論し、その具象クラスを生成している</span></span>
<span class="line"><span>public static void method(Ruunable r) {</span></span>
<span class="line"><span>    r.run();</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span>    http</span></span>
<span class="line"><span>        .authorizeHttpRequests(auth -&gt; auth</span></span>
<span class="line"><span>                .requestMatchers(&quot;/hello&quot;).permitAll());</span></span>
<span class="line"><span>    return http.build();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// authorizeHttpRequestsメソッドの引数の型は〇〇より、型推論によって〇〇インターフェースの具象クラスが生成される。</span></span>
<span class="line"><span>//   Customizerインターフェース。メソッドはcustomize()</span></span>
<span class="line"><span>//   Customizerインターフェースのcustomizeメソッドの実装が(auth -&gt; auth.requestMatchers(&quot;/hello&quot;).permitAll())</span></span>
<span class="line"><span>//   引数に渡すのは AuthorizeHttpRequestsConfigurer&lt;HttpSecurity&gt;.AuthorizationManagerRequestMatcherRegistry</span></span>
<span class="line"><span>//   引数にauthを渡し、customizeメソッド内でそれをカスタマイズしていくイメージか？</span></span>
<span class="line"><span>// 〇〇インターフェースの□□メソッドの実装部分がauth -&gt; auth.requestMatchers(&quot;/hello&quot;).permitAll()である。</span></span></code></pre></div>`,6)])])}const g=a(p,[["render",t]]);export{d as __pageData,g as default};
