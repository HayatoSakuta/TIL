---
title: "Arbitrary(jqwik)"
date: 2026-06-30
status: published
---

# Arbitrary(jqwik)

PBT(Property Based Test)のためのライブラリ`jqwik`には、任意の値を生成するために`Arbitrary`インターフェースが用意されている。  

```java
// 1から100のランダム値を生成するためのArbitrary
Arbitrary<Integer> numbers = Arbitraries.integers().between(1,100);

// 1から100のランダムの偶数値を生成するためのArbitrary
Arbitrary<Integer> evenNumbers = Arbitraries.integers().between(1,100).filter(v -> v%2==0);

// 値の取得(sampleメソッドを使用する場合)
System.out.println(enumbers.sample());
System.out.println(evenNumbers.sample());

```

注意点として、`Arbitrary`の宣言は値の生成ルールを定めているだけで、値を生成しているわけではない。  
実際の値の生成は通常jqwik側で実施されるか、sampleメソッドで値を生成することができる。
