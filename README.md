# textlint-rule-preset-bengo4

[![Test](https://github.com/bengo4/textlint-rule-preset-bengo4/actions/workflows/test.yml/badge.svg)](https://github.com/bengo4/textlint-rule-preset-bengo4/actions/workflows/test.yml)

弁護士ドットコムで使われているtextlintプリセット

## Installation

Install with [npm](https://www.npmjs.com/):

```sh
npm install textlint-rule-preset-bengo4
```
## Usage

すべてのルールを有効化して使う場合は、次のように設定してください。

```json
{
  "rules": {
    "preset-bengo4": true
  }
}
```

### Settings

表記ゆれ修正用の辞書の設定には`textlint-rule-prh`を使っています。
対応用語は`dict/`フォルダに入っている`.yml`を確認してください。

## Default Rule list

- 一般的な文書で利用するためのルール（二重否定、ら抜き表現、一文の文字数ほか）
  - https://github.com/textlint-ja/textlint-rule-preset-japanese
     - 一文で使える"、"の数
       - https://github.com/textlint-ja/textlint-rule-max-ten
     - 逆接の接続助詞「が」が、同一文中に複数回出現していないかどうか
       - https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
     - 同じ接続詞で開始されていることを検出
       - https://github.com/takahashim/textlint-rule-no-doubled-conjunction
     - 二重否定の検出
       - https://github.com/textlint-ja/textlint-rule-no-double-negative-ja
     - 二重助詞の検出
       - https://github.com/textlint-ja/textlint-rule-no-doubled-joshi
     - 一文の最大の長さ
       - https://github.com/azu/textlint-rule-sentence-length
     - ら抜き言葉を使用しない
       - https://github.com/azu/textlint-rule-no-dropping-the-ra
     - 文の敬体(ですます調)、常体(である調)の混合をチェック
       - https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu
     - ホ゜ケット エンシ゛ン のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
       - https://github.com/azu/textlint-rule-no-nfd
     - 制御文字の検出
       - https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
     - ゼロ幅スペースの検出
       - https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces
     - 康煕部首の検出
       - https://github.com/xl1/textlint-rule-no-kangxi-radicals
- JTF日本語標準スタイルガイドのルール
  - https://github.com/textlint-ja/textlint-rule-preset-JTF-style
- 表記ルール（ひらく漢字）
  - https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi
  - https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi
  - https://github.com/lostandfound/textlint-rule-ja-hiragana-hojodoushi
- 冗長な表現
  - https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression
- 敬体(ですます調)と常体(である調)の混在をチェック
  - https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu
- 対のカッコがあることをチェック
  - https://github.com/textlint-rule/textlint-rule-no-unmatched-pair

## Development

```sh
npm ci
npx husky install
```

### Commit message

コミットメッセージは[Angularのコミットメッセージフォーマット](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)に従ってください。

それによりリリースを自動化しています。詳しくは[リリース](#リリース)参照

よく使うものを掲載します。scopeは不要です。

```
<種別>: <具体的な変更内容>

例
fix: 日本語の副詞「と」のルールを修正
```

| 種別 | 内容 | マージリリース| バージョン |
| -- | -- | -- | -- |
| feat | 新しい機能 | 〇 | Miner Release |
| fix | バグ修正&軽微な修正 | 〇 | Patch Release |
| perf | コードのパフォーマンス修正 | 〇 | Major Release |
| BREAKING CHANGE | 互換性のない破壊的変更 | 〇 | Major Release |
| refactor| バグ修正や機能追加のないリファクタリング | | |
| test | テストパターンの追加や既存テストの修正 | | |
| docs | ドキュメントの変更 | | |
| chore | ビルドプロセスの改善など、上記に該当しないもの | | |

### Example execute

`example`フォルダ内のテストコードを実行します。

```sh
npm run example
```

### Tests

`test`フォルダ内のテストコードを実行します。

testの詳細は[textlint-tester](https://github.com/textlint/textlint-tester)を参照してください。

```sh
npm test
```

### Release

[semantic-release](https://semantic-release.gitbook.io/semantic-release/)で、GitHub Actionでmainブランチにマージするとリリースされます。

大まかな処理のステップは4段階です。

1. 既存のGitタグと、コミットの解析で自動バージョン決め
1. Gitのタグうち
1. CHANGELOG.md自動作成&コミット
1. npmへのパッケージ公開
