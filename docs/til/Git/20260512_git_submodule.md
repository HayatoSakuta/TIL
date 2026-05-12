# `git submodule`について

`git submodule`の仕組みを使用することで、リポジトリ内に別リポジトリの参照を持たせることができる。便宜的に、参照する方を親repo、参照される方を子repoと呼ぶ。親repoは、子repoの履歴を保持するわけではなく、子repoの特定コミットへの参照を持つ。

e.g.1
```
# 独立した2つのリポジトリが存在する
repo-a
repo-b

# repo-aがrepo-bをsubmoduleとして保持する
repo-a    # 親repo
 - repo-b # 子repo
```

上記の例においては、repo-aは、repo-bの履歴を保持するわけではなく、repo-bの特定コミットへの参照を保持する。すなわち、イメージとしては、以下のようになる。

- repo-aの履歴(コミットSHA)が、`aaa1`→`aaa2`→`aaa3`とする。
- repo-bの履歴(コミットSHA)が、`bbb1`→`bbb2`→`bbb3`とする。
- この場合、例えば、以下のように、repo-aはrepo-bの特定コミットを参照することとなる。
  - repo-a(`aaa1`) → repo-b(`bbb1`) ←repo-a(`aaa1`)はrepo-bのコミットSHA`bbb1`への参照を持つ
  - repo-a(`aaa2`) → repo-b(`bbb1`) ←repo-a(`aaa2`)はrepo-bのコミットSHA`bbb1`への参照を持つ
  - repo-a(`aaa3`) → repo-b(`bbb3`) ←repo-a(`aaa3`)はrepo-bのコミットSHA`bbb3`への参照を持つ


submobule仕組みを利用して、例えば、マルチレポ構成をモノレポ風に扱うことができる。

e.g.2
```
# 独立した複数のリポジトリ
repo-api
repo-batch
repo-ios

# 親リポジトリ`app`を作成し束ねることでモノレポ風を実現
app            # 親Repo
 - repo-api    # submodule
 - repo-batch  # submodule
 - repo-ios    # submodule
```

しかし、実際にsubmoduleを使用して開発を進める場合、以下のコマンドを理解する必要がある。これを自分以外にも理解させてチーム運用に乗せるのはなかなか厳しいと感じたため、私はいま、submoduleを実務で導入することを諦めかけている。。

- `git clone <親repo>`をするだけでは、submoduleはcloneされない。
- `git submodule init`により、`.gitmodules`の内容を、`.git/...`に反映する(submoduleであることをgitに認識させる)
- `git submodule update`により、親repoが指定したコミットSHAに、子repoがチェックアウトさせることができる。子repoがそのコミットをローカルに保持していない場合、リモートからclone/fetchする。
- `git submodule update --remote`により、子repoは、親repoが指定するコミットSHAではなく、リモートの最新コミットにチェックアウトすることができる。
- submoduleで実装を進めてコミットすると、親repoが参照するコミットも変更となる。そのため、親repoが指すコミットの変更を確定した場合、親repoでadd/commit/pushする必要がある。
