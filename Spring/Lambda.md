# ラムダ式について

## 汚いメモ
``` LocalClass.java
public static void main(String[] args) {
    Runnable runner = new Runnnable() { // ←ローカルクラスとして宣言していない
        @Override
        public void run() {
            System.out.println("Hello World !");
        }
    }
}
```

``` AnnonymousClass.java
public static void main(String[] args) {
    Runnable ruuner = () -> { System.out.println("Hello World!"); };
    ruuner.run;
}
// 変数runnerの型Runner(インターフェース)の具象クラスがruunerに代入される。
// {}の中身はrunメソッドの実装内容。
```

``` Lambda.java
public static void main(String[] args) {    
    method(()->{System.out.println("Hello World!");});
}
// methodの引数rの型がRunnable(インターフェース)であることから型推論し、その具象クラスを生成している
public static void method(Ruunable r) {
    r.run();
}
```

``` Example.java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
                .requestMatchers("/hello").permitAll());
    return http.build();
}
// authorizeHttpRequestsメソッドの引数の型は〇〇より、型推論によって〇〇インターフェースの具象クラスが生成される。
//   Customizerインターフェース。メソッドはcustomize()
//   Customizerインターフェースのcustomizeメソッドの実装が(auth -> auth.requestMatchers("/hello").permitAll())
//   引数に渡すのは AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry
//   引数にauthを渡し、customizeメソッド内でそれをカスタマイズしていくイメージか？
// 〇〇インターフェースの□□メソッドの実装部分がauth -> auth.requestMatchers("/hello").permitAll()である。
```