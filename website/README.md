# 花見川 福祉用具レンタル カタログサイト

介護用品カタログPDFをもとに作成したGitHub Pages用の静的Webサイトです。

## ファイル構成

```
website/
├── index.html              # トップページ
├── css/
│   └── style.css           # 共通スタイルシート
├── js/
│   └── app.js              # ナビ・アニメーション等
└── pages/
    ├── beds.html           # 介護用ベッド
    ├── mattress.html       # マットレス
    ├── wheelchair.html     # 車椅子・スロープ
    ├── walking.html        # 歩行補助・手すり・リフト
    ├── toilet-bath.html    # トイレ・入浴用品
    └── insurance.html      # 介護保険ガイド
```

## GitHub Pages への公開手順

1. GitHubで新しいリポジトリを作成する
2. このwebsiteフォルダの中身をリポジトリのルートに配置する
3. GitHubの Settings → Pages → Source を `main` ブランチ・`/(root)` に設定する
4. 数分後に `https://ユーザー名.github.io/リポジトリ名/` でアクセスできる

### コマンドでアップロードする場合

```bash
cd website
git init
git add .
git commit -m "初回コミット"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```

## カスタマイズのポイント

### 会社情報の更新
各HTMLファイルのフッター部分を編集してください：
- 電話番号
- 営業時間
- 住所

### 価格の更新
各商品カードの `.product-card-footer` 内の価格を実際の価格に変更してください。
「お問い合わせください」と表示している商品は `price-tbd` クラスを使用しています。

### 色の変更
`css/style.css` の先頭にある `:root` セクションでカラーを一括変更できます：
```css
:root {
  --green:       #2e7d32;  /* メインカラー */
  --green-light: #4caf50;  /* アクセントカラー */
  --orange:      #e65100;  /* 価格表示カラー */
}
```

### 商品の追加
`product-grid` div内に以下のHTMLをコピーして商品を追加できます：

```html
<div class="product-card">
  <div class="product-card-header">
    <div class="product-emoji">🛏️</div>
    <span class="product-maker">メーカー名</span>
  </div>
  <div class="product-card-body">
    <h3>商品名</h3>
    <div class="product-features">
      <span class="feature-tag">特徴1</span>
    </div>
    <table class="spec-table">
      <tr><th>スペック項目</th><td>値</td></tr>
    </table>
  </div>
  <div class="product-card-footer">
    <div class="price-label">月額レンタル料（1割負担）</div>
    <div class="price-row">
      <span class="price-main">○○○円</span>
    </div>
  </div>
</div>
```

## 動作確認

ローカルで確認する場合は、VSCodeのLive Server拡張機能や以下のコマンドを使用：

```bash
# Node.jsがある場合
npx serve .

# Pythonがある場合
python -m http.server 8080
```

その後 `http://localhost:8080` にアクセスしてください。

---
© 2025 花見川 福祉用具レンタル
