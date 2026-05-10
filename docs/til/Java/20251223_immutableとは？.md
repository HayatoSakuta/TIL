---
title: "immutableとは？"
date: 2025-12-23
status: published
---

# 20251223_immutableとは？

mutableは「変更可能な」を意味するので、immutableは「変更不可能な」を意味する。

Javaにおけるimmutableとは、「オブジェクトの状態（フィールド）が書き換わることがない」を意味する。例えば、Stringはimmutableなクラスであり、以下に説明用のコードを記載する。

```java
String str = "str";
str = "ing";
```

このプログラムにおいては、変数strは、まず”str”を参照し、次に”ing”を参照する。このとき、もともと参照していた”str”が”ing”に書き換わるのではなく、”str”はそのまま、”ing”が新しく生成され、変数strの参照先が変わるだけである。

このように、もともと存在するオブジェクトの状態（フィールド）が変わらないクラスを、immutableなクラスという。