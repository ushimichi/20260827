# pj-docs 開発資料ひな型

Webサービス開発プロジェクトを想定した開発資料一式のテンプレートです。
例として、チーム向けタスク管理Webサービス「**TaskFlow**」を題材にしています。
実プロジェクトで使用する際は、プロジェクト名・数値・体制などを実情に合わせて置き換えてください。

## フォルダ構成

| フォルダ | 資料 | 形式 |
| --- | --- | --- |
| [01_proposal](01_proposal/) | 企画書 | Markdown |
| [01_proposal](01_proposal/) | 概要書（経営会議用サマリー） | **Markdown スライド（Marp / 16:9）** |
| [02_requirements](02_requirements/) | 要件定義書 | Markdown |
| [03_kickoff](03_kickoff/) | キックオフ資料（収益予測含む） | Markdown |
| [04_external-design](04_external-design/) | 外部（基本）設計書 | Markdown |
| [05_internal-design](05_internal-design/) | 内部（詳細）設計書 | Markdown |
| [06_coding-standards](06_coding-standards/) | コーディング規約（Playwright等テストツール含む） | Markdown |
| [07_product-review](07_product-review/) | 製品レビュー資料（成果物・完成物レビュー） | **Markdown スライド（Marp / 16:9）** |
| [08_comprehensive-testing](08_comprehensive-testing/) | 総合テスト計画書、テストチェックリスト | Markdown |
| [09_shipment-approval](09_shipment-approval/) | 出荷判定資料、出荷物一覧、リリース計画書 | Markdown |
| [10_post-release-retrospective](10_post-release-retrospective/) | リリース後振り返り | Markdown |

> フォルダ名・ファイル名はOS依存の文字化けや文字コード事故を避けるため英語表記としています。文書内の記述は日本語のままです。

## 資料作成の流れ（想定フロー）

```mermaid
flowchart LR
    A[企画書/概要書] --> B[要件定義書]
    B --> C[キックオフ資料]
    C --> D[外部設計書]
    D --> E[内部設計書]
    E --> F[コーディング規約]
    F --> G[実装]
    G --> H[総合テスト]
    H --> I[製品レビュー]
    I --> J[出荷判定資料]
    J --> K[リリース]
    K --> L[リリース後振り返り]
```

## スライド資料（Marp）について

以下の資料は、発表・レビュー用に **横長スライドショー形式（16:9）** の Markdown（Marp記法）で作成しています。

- `01_proposal/overview.md`（企画概要書：経営会議・意思決定用サマリー）
- `07_product-review/product-review.md`（製品レビュー資料：最終レビュー会用）

利用にはCLIは不要で、[Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) 拡張機能の導入のみを前提としています。

1. VS CodeでMarp for VS Code拡張機能をインストールする。
2. 対象の `.md` ファイルを開き、エディタ右上のプレビューアイコンからスライドプレビューを表示する。
3. コマンドパレット（`Ctrl+Shift+P`）から `Markdown Preview Enhanced` ではなく `Marp: Export slide deck...` を実行すると、PDF/PPTX/HTML形式でエクスポートできる。

## Markdown資料のPDF化手順

いずれもCLIは不要で、VS Code拡張機能のみでPDF化できます。

### スライド資料（Marp形式）をPDF化する場合

対象：`01_proposal/overview.md`、`07_product-review/product-review.md`

1. [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) 拡張機能をインストールする。
2. 対象の `.md` ファイルをエディタで開く。
3. コマンドパレット（`Ctrl+Shift+P`）を開き、`Marp: Export slide deck...` を実行する。
4. ファイル形式で `PDF` を選択し、保存先を指定する。

### 通常のMarkdown資料をPDF化する場合

対象：上記スライド資料以外のすべての `.md`（企画書、要件定義書、設計書等）

1. [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.vscode-markdown-pdf) 拡張機能をインストールする。
2. 対象の `.md` ファイルをエディタで開く。
3. コマンドパレット（`Ctrl+Shift+P`）を開き、`Markdown PDF: Export (pdf)` を実行する。
4. 同じフォルダに同名の `.pdf` ファイルが生成される。

> Mermaid図（フローチャート・ER図・ガントチャート等）を含む資料は、拡張機能の設定でMermaidレンダリングが有効になっていることを確認してください（Markdown PDF はデフォルトでMermaidに対応しています）。

## 使い方

1. 各フォルダの `.md` を実プロジェクト用にコピーして編集してください。
2. `[ ]` で囲まれた項目はプレースホルダーです。実情報に置き換えてください。
3. 表や見出し構成は最低限のひな型です。プロジェクト規模に応じて章立てを追加・削除してください。
