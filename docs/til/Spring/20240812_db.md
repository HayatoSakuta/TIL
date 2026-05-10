# db

## @Transactionalで例外発生時にロールバックされる条件
@Transactionalを付与したメソッド内で例外が発生しても、Springにその例外が伝わらなければRollbackされない。
より具体的には、「@Transactionalを付与したメソッド」を呼び出す「プロキシオブジェクト」に例外が伝わらなければRollbackされない。

``` java
// insert()でのDB更新はRollbackされない
// try-catch内で例外がもみ消されメソッドは正常終了し、Spring(プロキシオブジェクト)に例外が伝播されないため
@Transactional
public static void noRollback(){
    try{
        insert(); // DB更新
        hoge(); //このメソッドで例外発生するとする
    } catch(Exception e) {
        System.out.println("例外発生");
    }
}
```

``` java
// Spring(プロキシオブジェクト)に例外がスローされるため、insert()でのDB更新はRollbackされる
@Transactional
public static void yesRollback(){
    try{
        insert(); // DB更新
        hoge(); //このメソッドで例外発生するとする
    } catch(Exception e) {
        throw e;
    }
}
```