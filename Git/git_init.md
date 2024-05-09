# git init について

## git initすると何が起こるか。
- git initするとカレントディレクトリに.gitディレクトリが作られる
- カレントディレクトリがgit管理対象となる

```sample
user$ mkdir work
user$ cd work
user$ git init
Initialized empty Git repository in /home/johndoe/work/.git/
user$ ls .git
HEAD  config  description  hooks  info  objects  refs
user$
```

上記例の場合workが作業ディレクトリ、.gitがローカルリポジトリ

## ノンベアリポジトリとベアリポジトリ
- git initにはオプションがある。
- `--bare`オプションをつけることでベアリポジトリを作成できる。
- 単に`git init`する場合に作成される`.git`はノンベアリポジトリ

```non_bare
user$ mkdir non_bare
user$ cd non_bare
user$ git init
user$ ls -a
. .. .git
user$
```
.gitはノンベアリポジトリ

```bare
user$ mkdir bare.git
user$ cd bare.git
user$ git init --bare
user$ ls
HEAD  config  description  hooks  info  objects  refs
user$
```
mkdirして作成したbare.gitがベアリポジトリ
ベアリポジトリのディレクトリ名は~.gitとなる
