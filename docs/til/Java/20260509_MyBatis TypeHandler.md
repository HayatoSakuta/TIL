---
title: "MyBatis TypeHandler"
date: 2026-05-09
status: draft
---

# 20260509_MyBatis TypeHandler

Mybatisは、Javaオブジェクト/プリミティブ型を、MapperXMLに記載したSQL内のパラメーターに埋め込む役割を担っているが、JavaオブジェクトをSQLで使用可能な型に変換するためにTypeHandlerという仕組みが使用される。また、自作のTypeHandlerを用意することもでき、例えば、Javaオブジェクトは平文の値のものを、自作のTypeHanlder内で暗号化することで、SQL内のパラメーターには暗号化済みの値を渡すことができる。こうすることで、DB登録処理に暗号化処理を含める必要がなくなり、処理がスッキリする。自作のTypeHandlerは、BaseTypeHandlerを継承したクラスを実装することで、実現できる。