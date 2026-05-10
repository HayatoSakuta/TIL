- split(String regex)
  - Stringクラスのメソッドの一つ。
  - 引数に指定した区切文字regexで文字列を分割し、文字列配列を返してくれる。
``` java
String str = "hoge,fuga,foo,bar";
String[] strArray = str.split(","); // {"hoge","fuga","foo","bar"}
```

- join(String delimiter, CharSequence elements)
  - Stringクラスのメソッドの一つ
  - delimiterは区切文字、elementsは文字列配列やList<String>など
  - elementsの各要素(String)をdelimiterで結合した文字列を返してくれる。
``` java
String[] strArray = {"hoge","fuga","foo"};
String str_1 = String.join("-",strArray); // hoge-fuga-foo

List<String> strList = Arrays.asList(strArray);
String str_2 = String.join("-",strList); // hoge-fuga-foo
```