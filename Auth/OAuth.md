# OAuth2.0とは

## OAuthとは？と雑に箇条書きしてみる
- 認証のAPIにおける標準的な仕様。
- GoogleなどもOAuthによる認証機能を提供している。★
- OAuthは広く第三者に公開されるAPIにおいて認可を行うために用いられる。

## 具体例で整理してみる
- Googleは広く第三者にGoogleCalendar APIを提供している。
- 私が作成したサービスcalc_paymentはGoogleCalendar APIを利用してユーザーのカレンダー情報を取得したい。
- ユーザーはcalc_paymentに対しGoogleCalendarの情報にアクセスすることを許可する(OAuth)
  - これをもう少し具体的にすると・・・
    - ユーザーはGoogleCalendarからアクセストークンを受領する。
    - ユーザーはアクセストークンをcalc_paymentに渡す。
    - calc_paymentはGoogleCalendarにアクセストークンと共にリクエストを投げる。
    - アクセストークンによりリクエストが許可され、GoogleCalendarはユーザーの情報をcalc_paymentに渡す。

