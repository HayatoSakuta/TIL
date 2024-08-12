# HOMEWORK

## MyBatisでselectする際、1件検索の想定が複数件ヒットしてしまった場合の挙動について
以下の例では、repository側では「一件のみ検索される」前提で戻り値を(List<Hoge>ではなく)Hogeとしているが、仮にselectで複数ヒットした場合にエラーとなるのか。
``` java
public interface HogeMapper {
  public Hoge selectById(String id);
}
```
``` xml
<select id="selectById" resultType="Hoge">
  SELECT * FROM HOGE WHERE ID=#{id, jdbcType=VARCHAR}
</select>
```
⇒例外発生した  
`org.apache.ibatis.exceptions.TooManyResultsException: Expected one result (or null) to be returned by selectOne(), but found: 5`

以下のようにしたら複数返却されても大丈夫かか
``` java
public interface HogeMapper {
  public List<Hoge> selectById(String id);
}
```
⇒YES。例外は発生せず正常に動作した。

結論：1行のみ返却される想定でMapperクラスのメソッド戻り値を(Listではなく)単一オブジェクトにすると、複数行が返却された場合には例外が発生する。


## Javaにおける例外ハンドリングのベストプラクティス
脳死で`throw e`するのやめたい。

## SpringでRestAPIを実装する場合のレスポンスオブジェクトの設計について
複数のAPIに共通のレスポンスオブジェクトを用意する、みたいなのは一般的に行われるのか。

## MyBatis側で発生した例外はどこで補足するべきか
Serviceロジック内で`catch(Exception e)`したが、ここでは補足できなかった。
具体的には`org.postgresql.util.PSQLException`が発生した。
他にも  
`org.apache.ibatis.exceptions.TooManyResultsException: Expected one result (or null) to be returned by selectOne(), but found: 5`  
はServiceロジック内で補足できなかった。

VerifyPincodeServiceで以下を試してみるもうまくいかず
`catch(PSQLException e)`…「try文からスローされません」的なエラーメッセージ
`catch(TooManyResultsException e)`…この例外が発生(コンソールログに出力されている)しても、ここでは捕捉できず

ステップモードで丁寧にデバッグしてみる
- Serviceクラスの`catch(Exception e)`を通ってた。
- Controllerでcatchしてないからか、例外はSpringにスローされているようだった。
- Controllerに例外処理入れてみる。
- ⇒ExceptionHandlerで例外を捕捉し、正常終了させることができた。

発生していた例外は`TooManyResultsException`ではなく`MyBatisSystemException`だった。
`catch(MyBatisSystemException e)`はちゃんと通過した。
`e.getCause().printStachTrace()`すると`TooManyResultsException`を出力できた。

⇒TooManyResultsExceptionへの対処方法はどうするか。
  - 検索結果を`List<EmailVerificationCode>`で受領し、要素数でいい感じにエラーを出すか。
  - `MyBatisSystemException`をgetCauseしていい感じにできるか。
  - 1件のみヒットするはず、の前提があるので、特別考慮はしないか。

## RestAPIの呼出〜レスポンス返却まで、Spring内部も含めて挙動を理解したい(DispatcherServletなど含めて)
