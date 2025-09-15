# 青空眼科クリニック Webサイト

架空の眼科クリニックのWebサイトです。Next.js 14 + TypeScript + Tailwind CSSで構築された、上品で清潔感のある医療サイトです。

## 🎯 プロジェクト概要

- **技術スタック**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **デザインシステム**: 明朝体ベース、白・水色・青の清潔系配色
- **アクセシビリティ**: WCAG 2.2 AA相当
- **SEO最適化**: 構造化データ、OGP、サイトマップ対応
- **レスポンシブ対応**: モバイルファースト設計

## 🚀 セットアップ

### 必要な環境

- Node.js 18.17以上
- npm または yarn または pnpm

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd aozora-eyeclinic

# 依存関係のインストール
npm install
# または
yarn install
# または
pnpm install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 📁 プロジェクト構造

```
aozora-eyeclinic/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # グローバルスタイル
│   ├── layout.tsx               # ルートレイアウト
│   ├── page.tsx                 # ホームページ
│   ├── about/page.tsx           # クリニック案内
│   ├── services/page.tsx        # 診療案内
│   ├── doctors/page.tsx         # 医師紹介
│   ├── access/page.tsx          # アクセス
│   ├── contact/page.tsx         # お問い合わせ
│   └── sitemap.ts               # サイトマップ
├── components/                   # 再利用可能なコンポーネント
│   ├── ui/                      # 基本UIコンポーネント
│   ├── layout/                  # レイアウトコンポーネント
│   ├── sections/                # セクションコンポーネント
│   └── forms/                   # フォームコンポーネント
├── lib/                         # ユーティリティ・設定
├── public/                      # 静的ファイル
├── tests/                       # テストファイル
└── types/                       # TypeScript型定義
```

## 🎨 デザインシステム

### カラーパレット

Figma MCPまたはフェールバック値を使用したデザイントークンを採用：

```css
:root {
  --bg: #ffffff;           /* 背景色 */
  --brand: #1E5BB8;        /* メインブランドカラー */
  --brand-600: #174A94;    /* ブランドカラー（濃） */
  --brand-100: #E9F3FF;    /* ブランドカラー（薄） */
  --accent: #4FB3FF;       /* アクセントカラー */
  --text: #0B1B2B;         /* メインテキスト */
  --text-muted: #5B6B7C;   /* サブテキスト */
  --border: #E6ECF2;       /* ボーダー */
  --surface: #F7FBFF;      /* サーフェス */
}
```

### タイポグラフィ

- **フォント**: Noto Serif JP（明朝体）
- **フォールバック**: \"Hiragino Mincho ProN\", \"Yu Mincho\", serif
- **行間**: 1.6-1.8（可読性重視）
- **文字組み**: `text-balance` / `text-pretty` 活用

### スペーシングシステム

8pxグリッドベース：
- 2 (0.5rem) / 3 (0.75rem) / 4 (1rem) / 6 (1.5rem)
- 8 (2rem) / 12 (3rem) / 16 (4rem) / 24 (6rem) / 32 (8rem)

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# ESLintチェック
npm run lint

# Prettierフォーマット
npm run format

# Playwrightテスト実行
npm run test

# Playwrightテスト（UIモード）
npm run test:ui
```

## 🧪 テスト

Playwrightを使用したE2Eテストを実装しています。

### テスト実行

```bash
# すべてのテストを実行
npm run test

# UIモードでテスト実行
npm run test:ui

# 特定のブラウザでテスト
npx playwright test --project=chromium
```

### テスト項目

- 基本的なアクセシビリティチェック
- ナビゲーション操作
- フォーム入力・バリデーション
- レスポンシブデザイン
- キーボード操作
- 色のコントラスト・可読性

## 📱 主要機能

### 1. レスポンシブデザイン
- モバイルファースト設計
- ブレークポイント: sm(640px) / md(768px) / lg(1024px) / xl(1280px)
- タッチフレンドリーなUIコンポーネント

### 2. アクセシビリティ
- WCAG 2.2 AA準拠
- スクリーンリーダー対応
- キーボードナビゲーション
- 適切なコントラスト比
- Skip to contentリンク
- ARIA属性の適切な使用

### 3. SEO最適化
- Next.js Metadataを使用したメタタグ管理
- 構造化データ（JSON-LD）でMedicalBusiness情報
- OGP対応
- XMLサイトマップ自動生成
- パフォーマンス最適化

### 4. フォーム機能
- React Hook Form + Zod バリデーション
- 日本語エラーメッセージ
- アクセシブルなフォーム設計
- スパム対策（ハニーポット）
- リアルタイムバリデーション

## 🔧 カスタマイズ

### 1. デザイントークンの変更

`tailwind.config.ts`で色やフォントを調整：

```typescript
theme: {
  extend: {
    colors: {
      'brand': '#1E5BB8', // メインカラーを変更
      // ...
    }
  }
}
```

### 2. コンテンツの更新

各ページファイル（`app/*/page.tsx`）で内容を変更：

- クリニック名: 「青空眼科」→ 任意の名前
- 住所・電話番号: `lib/metadata.ts`で一括管理
- 診療時間: 各ページで個別設定

### 3. 構造化データの更新

`lib/utils.ts`の`createStructuredData()`関数で医療機関情報を更新。

## 🚀 デプロイ

### Vercel（推奨）

```bash
# Vercel CLIインストール
npm i -g vercel

# デプロイ
vercel

# プロダクションデプロイ
vercel --prod
```

### Docker

```bash
# イメージビルド
docker build -t aozora-eyeclinic .

# コンテナ実行
docker run -p 3000:3000 aozora-eyeclinic
```

### その他のプラットフォーム

- **Netlify**: `npm run build`後、`out`フォルダをデプロイ
- **AWS S3/CloudFront**: Static Export設定後デプロイ
- **GitHub Pages**: GitHub Actionsでビルド・デプロイ

## 🎯 パフォーマンス最適化

### 実装済みの最適化

1. **画像最適化**
   - `next/image`コンポーネント使用
   - WebP/AVIF自動変換
   - レスポンシブ画像

2. **フォント最適化**
   - `next/font`でGoogle Fonts読み込み
   - `font-display: swap`設定
   - プリロード設定

3. **JavaScript最適化**
   - Code splitting（自動）
   - Tree shaking
   - バンドルサイズ最適化

4. **CSS最適化**
   - Tailwind CSS purge機能
   - Critical CSS インライン化

### Lighthouseスコア目標

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔒 セキュリティ

### セキュリティヘッダー

`next.config.js`でセキュリティヘッダーを設定：

```javascript
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // ...
]
```

### フォームセキュリティ

- CSRF対策
- XSS対策
- スパム対策（ハニーポット）
- 入力値サニタイズ

## 🎨 Figma連携

### Figma MCP設定

現在のFigmaデザイントークン抽出は失敗しましたが、以下の手順で再設定可能：

1. Figma MCP ServerのFigmaトークン設定
2. デザインファイルURLの指定
3. `lib/design-tokens.ts`での値同期

### デザイン差分チェック項目

- [ ] カラーパレット（Brand/Accent/Text/Background）
- [ ] タイポグラフィ（Size/Weight/Line-height）
- [ ] スペーシング（Padding/Margin）
- [ ] 角丸（Border radius）
- [ ] シャドウ（Box shadow）
- [ ] フォーカスリング

## 📚 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Playwright Testing](https://playwright.dev/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [医療広告ガイドライン](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/index.html)

## 📄 ライセンス

このプロジェクトはデモ目的で作成されており、実際の医療機関ではありません。
商用利用する場合は、適切なライセンス設定を行ってください。

---

**開発者向けメモ**:

- TypeScriptの型安全性を最大限活用
- コンポーネントの再利用性を重視
- アクセシビリティファーストの開発
- パフォーマンスとUXのバランス

**医療サイト特有の考慮事項**:

- 医療広告ガイドラインの遵守
- 患者プライバシーの保護
- 正確で誤解を招かない情報提供
- 緊急時の明確な連絡先表示