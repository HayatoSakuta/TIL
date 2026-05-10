---
title: "Set Integer の重複判定について"
date: 2026-01-24
status: published
---

# 20260124_Set<Integer>の重複判定について

Setは重複を許さないコレクションである。
Set<Integer>の場合は、Integerが保持するintの値が同じかどうかで、重複判定を行う。
※より正確には、例えばHashSetを用いる場合は、hashCode()が同一かつ、equals()がtrueの場合に、重複と判定される。

```java
Set<Integer> set = new HashSet<>();
Integer integer1 = new Integer(1);
Integer integer2 = new Integer(2);
Integer integer3 = new Integer(3);
Integer integer4 = new Integer(1);

set.add(integer1);
set.add(integer2);
set.add(integer3);
set.add(integer4);

for(Integer integer : set){
  System.out.println(integer);
}

// 出力結果
// ---
// 1
// 2
// 3
// ---
```