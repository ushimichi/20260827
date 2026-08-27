---
name: webapp-project-builder
description: 'Build and maintain this web service project with GitHub Copilot. Use when creating features, changing architecture, writing documentation, implementing GitHub Pages content, or adding tests. Always read the project coding standards before editing code.'
argument-hint: '[task or feature to implement]'
user-invocable: true
disable-model-invocation: false
---

# Web Service Project Builder

このSkillは、GitHub Copilotを使って本リポジトリのWebサービスを構築・変更するときの標準ワークフローを定義します。

## 必須の事前確認

編集を始める前に、次の資料を確認します。

1. [コーディング規約](../../../pj-docs/06_coding-standards/coding-standards.md)
2. 変更対象に関係する資料
   - 企画・目的：[proposal](../../../pj-docs/01_proposal/proposal.md)
   - 要件：[requirements](../../../pj-docs/02_requirements/requirements.md)
   - 外部（基本）設計：[external-design](../../../pj-docs/04_external-design/external-design.md)
   - 内部（詳細）設計：[internal-design](../../../pj-docs/05_internal-design/internal-design.md)
   - テスト：[test-plan](../../../pj-docs/08_comprehensive-testing/test-plan.md)
3. 既存の実装、設定、テスト、関連するGit差分

資料に記載がない仕様は推測で確定せず、確認事項として利用者に提示します。

## 標準ワークフロー

### 1. 依頼を整理する

- 目的、対象ユーザー、変更範囲、完了条件を明確にする。
- 関連する機能ID、画面ID、API IDがあれば特定する。
- 対象外、制約、該当しない項目を確認する。

### 2. 影響範囲を調べる

- 既存のコンポーネント、API、データモデル、設定、テストを検索する。
- 既存パターンを優先し、新しい抽象化は必要な場合だけ追加する。
- 変更前に、実装を確認できる最小のテストまたは検証方法を決める。

### 3. 実装する

- コーディング規約の命名、フォーマット、例外処理、入力検証、認可方針に従う。
- 秘密情報、APIキー、パスワード、個人情報、本番データをコードやプロンプトに入力しない。
- `docs/` はGitHub Pages公開用のソースフォルダであり、静的ページを変更するときは `docs/index.html`、`docs/style.css`、`docs/script.js`、`docs/images/` の構成を維持する。
- ドキュメントを作成・変更するときは、既存のMarkdown構成と相互リンクを維持する。

### 4. テストを追加・実行する

- ロジック変更には単体テストを追加する。
- 主要なユーザー操作にはPlaywrightのE2Eテストを追加または更新する。
- 固定時間待機（`waitForTimeout`）ではなく、状態や要素を待機する。
- テストデータは専用環境を使い、本番データを使用しない。

### 5. 検証してレビューする

次の順に実行し、結果を確認します。

1. フォーマット・Lint
2. 単体テスト
3. Playwright E2Eテスト
4. ビルド
5. 要件・設計との整合性レビュー

レビューでは、要件漏れ、認可漏れ、入力検証不足、例外処理、性能、アクセシビリティ、回帰リスク、テスト不足を優先して確認します。

## GitHub Copilotへの依頼例

### 機能実装

```text
コーディング規約を先に読み、要件定義書F-004と外部設計書API-004に基づいてタスク作成機能を実装してください。
既存の構成と命名規約を維持し、変更対象を最小限にしてください。
入力検証、認可チェック、エラーハンドリング、単体テスト、PlaywrightのE2Eテストを含めてください。
仕様が不足している点は推測せず、確認事項として列挙してください。
```

### ドキュメント作成

```text
コーディング規約と要件定義書を確認し、総合テスト計画書の不足している項目を整理してください。
既存の章立てと用語を維持し、確定していない数値は推測せず[要確認]として残してください。
該当しない項目は「該当なし」と記載してください。
```

### 変更レビュー

```text
今回の変更を、要件・外部設計・内部設計との整合性、セキュリティ、例外処理、性能、アクセシビリティ、回帰リスク、テスト不足の順にレビューしてください。
重大度の高い問題から、ファイル名、該当箇所、理由、修正案を示してください。
問題がない観点は「問題なし」と明記してください。
```

## 完了条件

- [ ] 変更対象と影響範囲が明確である
- [ ] コーディング規約および関連資料に適合している
- [ ] 必要な単体テスト・Playwrightテストがある
- [ ] Lint、テスト、ビルドを実行済みである
- [ ] ドキュメントと相互リンクが更新されている
- [ ] 機密情報が含まれていない
