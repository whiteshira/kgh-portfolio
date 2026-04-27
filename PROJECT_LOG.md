# KGH Hotel Portfolio — Project Log

**作成日**: 2026-04-27  
**担当**: Shinichi (shinichi@kokoglobalhospitality.com)  
**リポジトリ**: https://github.com/whiteshira/kgh-portfolio  
**本番URL**: https://kgh-portfolio-livid.vercel.app  
**管理画面**: https://kgh-portfolio-livid.vercel.app/admin

---

## プロジェクト概要

Koko Global Hospitality (KGH) が運営する全ホテルを一覧・検索できるポートフォリオサイト。  
各ホテルブランドのコーポレートサイトとは別に、ビジターがフィルター機能を使いながら好みのホテルを探せるようにすることを目的とする。

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 15.3.9 (App Router) |
| 言語 | TypeScript |
| スタイリング | CSS (globals.css / CSS Variables) |
| フォント | Lora (見出し) + IBM Plex Sans Thai (本文) — Google Fonts |
| データ | 静的TypeScript (`data/hotels.ts`) → 将来Supabase移行予定 |
| デプロイ | Vercel |
| バージョン管理 | GitHub (`whiteshira/kgh-portfolio`) |
| バックエンドDB | Supabase（未設定、設定後にアドミン編集が有効化）|

---

## KGH デザインシステム

ブランドガイドライン: `/Users/shinichi/Downloads/Koko Global Hospitality Brand Guideline.pdf`

### カラーパレット
| 名称 | HEX | 用途 |
|------|-----|------|
| Black | `#060D18` | 背景・メインカラー |
| Soft Beige | `#fbf8f2` | テキスト・ライトカラー |
| White | `#ffffff` | |
| Light Blue | `#D7EAF7` | アクセント (Pantone 290C) |
| Dark Blue Emerald | `#2C5B6D` | インタラクティブ要素 (Pantone 7707C) |

### タイポグラフィ
| 役割 | フォント | ウェイト |
|------|---------|---------|
| 見出し (英語) | Lora | Bold 700 |
| サブ見出し | IBM Plex Sans Thai | Semi Bold 600 |
| 本文 | IBM Plex Sans Thai | Regular 400 |

### ブランドトーン
Young · Professional · Trustworthy

### ロゴ
- 使用ファイル: `/Users/shinichi/Downloads/Logo-03.png`（ダーク背景・白テキスト・正方形）
- 元ファイル場所: `/Users/shinichi/OneDrive - Kokotel (Thailand) Co., Ltd/Brand Material/Koko Global Hospitality/Logo/`

---

## ホテルポートフォリオ

**元データ**: `/Users/shinichi/Downloads/[KGH] Brand Lists - Brand Lists.csv`

**総プロパティ数**: 44件（表示対象42件、非表示2件）

### 国別内訳
- タイ: 40件
- フィリピン: 4件

### ブランド別内訳
- Kokotel: 18件
- Independent (KGH管理): 26件

### デスティネーション一覧
Bangkok, Bangsaen, Cebu, Chiang Mai, Chiang Rai, Hua Hin, Khao Lak, Krabi, Nakhon Nayok, Pattaya, Prachuap Khiri Khan, Phuket, Rayong, Tagaytay

### 非表示設定ホテル（visible: false）
| ホテル名 | 理由 |
|---------|------|
| Sea Side Ao Nang Krabi | Element="Empty"（データ未整備）|
| Mangrove Place and Residences | Element="Empty"（データ未整備）|

---

## 機能仕様

### 公開サイト (`/`)
- ホテルカードグリッド（3列 PC / 2列タブレット / 1列モバイル）
- フィルター機能
  - Country（Thailand / Philippines）
  - Destination（都市別）
  - Brand（Kokotel / Independent）
  - Status（Open / Coming Soon）
  - テキスト検索
- `visible: true` のホテルのみ表示
- Facebookリンクは非表示（ウェブサイトリンクのみ）
- ISRキャッシュ: 1時間

### 管理画面 (`/admin`)
- パスワード認証（Cookie）
- 全ホテルの一覧表示
- 編集可能項目: Website URL / Visible（表示/非表示）
- Supabase設定後に保存機能が有効化
- Supabase未設定時はRead-Onlyモード表示

---

## ファイル構成

```
kgh-portfolio/
├── app/
│   ├── layout.tsx          # ルートレイアウト（フォント設定）
│   ├── page.tsx            # メインページ（サーバーコンポーネント、ISR）
│   ├── globals.css         # デザインシステム全CSS
│   ├── admin/
│   │   ├── page.tsx        # アドミンページ（認証チェック）
│   │   └── login/
│   │       └── page.tsx    # ログインフォーム
│   └── api/
│       ├── auth/
│       │   └── route.ts    # POST /api/auth（ログイン）
│       └── hotels/
│           └── [id]/
│               └── route.ts # PATCH /api/hotels/[id]（ホテル更新）
├── components/
│   ├── HotelsClient.tsx    # 公開サイトUI（クライアントコンポーネント）
│   └── AdminClient.tsx     # アドミンUI（クライアントコンポーネント）
├── data/
│   └── hotels.ts           # 静的ホテルデータ（44件）
├── lib/
│   ├── data.ts             # データアクセス層（Supabase or 静的フォールバック）
│   └── supabase.ts         # Supabaseクライアント設定
├── supabase/
│   └── schema.sql          # DBスキーマ（Supabase SQLエディタで実行）
└── public/
    └── logo.png            # KGHロゴ（Logo-03.png）
```

---

## 環境変数

### 現在設定済み（Vercel Production）
| 変数名 | 状態 |
|--------|------|
| `ADMIN_SECRET` | ✅ 設定済み |

### 未設定（Supabase連携に必要）
| 変数名 | 取得場所 |
|--------|---------|
| `SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role key |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon public key |

---

## Supabase 設定手順（未完了）

1. https://supabase.com でプロジェクト作成（名前: `kgh-portfolio`）
2. SQL Editor で `supabase/schema.sql` を実行
3. シードスクリプト実行（Claude Codeに依頼）
4. Vercelに上記3つの環境変数を追加
5. `vercel --prod` で再デプロイ

---

## デプロイ履歴

| 日時 | 内容 | URL |
|------|------|-----|
| 2026-04-27 | 初回プレビューデプロイ | https://kgh-portfolio-whiteshira-whiteshiras-projects.vercel.app |
| 2026-04-27 | Next.js 15.3.1 → 15.3.9 (CVE修正) | — |
| 2026-04-27 | 本番デプロイ (v1) | https://kgh-portfolio-livid.vercel.app |

---

## 今後のロードマップ

### 優先度高
- [ ] Supabase接続（アドミン編集機能の有効化）
- [ ] Supabaseシードデータ投入（全44ホテル）
- [ ] カスタムドメイン設定

### 優先度中
- [ ] 各ホテルの写真表示（OTA/ブランドサイトから取得）
- [ ] Google Sheets連携オプション
- [ ] 多言語対応（日本語・タイ語）

### 優先度低
- [ ] 地図ビュー（Leaflet.js）
- [ ] ホテル詳細ページ
- [ ] Supabaseからの新規ホテル追加機能（アドミン）

---

## 関連ファイル（ローカル）

| ファイル | パス |
|---------|------|
| ブランドガイドライン PDF | `/Users/shinichi/Downloads/Koko Global Hospitality Brand Guideline.pdf` |
| ホテルリスト CSV | `/Users/shinichi/Downloads/[KGH] Brand Lists - Brand Lists.csv` |
| ロゴ PNG (使用中) | `/Users/shinichi/Downloads/Logo-03.png` |
| ロゴ各バリエーション | `/Users/shinichi/OneDrive - Kokotel (Thailand) Co., Ltd/Brand Material/Koko Global Hospitality/Logo/` |
