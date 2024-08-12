# TIL
Today I Learned

## WANNA UNDERSTAND

### MyBatisでselectする際、1件検索の想定が複数件ヒットしてしまった場合の挙動について
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

### Javaにおける例外ハンドリングのベストプラクティス
脳死で`throw e`するのやめたい。

### SpringでRestAPIを実装する場合のレスポンスオブジェクトの設計について
複数のAPIに共通のレスポンスオブジェクトを用意する、みたいなのは一般的に行われるのか。
