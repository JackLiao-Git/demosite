# CarVision 汽車介紹網站

這是一個基於 **純 HTML/CSS/Vanilla JS** 開發的響應式汽車介紹網站，專為展示車款資訊與最新文章而設計。

## 網站功能
- **首頁**: 包含全寬自動輪播 Banner、熱門車款推薦卡片、相關網站連結。
- **文章導覽**: 展示所有車款的網格列表。
- **文章內頁**: 詳細展示車款規格 (加速、續航、馬力) 與深度內容。
- **響應式設計**: 支援手機、平板與桌上型電腦瀏覽。

## 專案結構
- `index.html`: 首頁。
- `articles.html`: 文章列表頁。
- `article-detail.html`: 文章詳細內容頁。
- `css/style.css`: 網站樣式。
- `js/data.js`: 汽車資料庫 (JSON)。
- `js/main.js`: 輪播邏輯、卡片渲染、動態內容加載。

## 如何部署到 GitHub Pages
1. 在 GitHub 上建立一個新的倉庫 (Repository)。
2. 將所有檔案推送到該倉庫。
3. 前往倉庫的 **Settings** -> **Pages**。
4. 在 **Build and deployment** 下方的 **Branch** 選擇 `main` (或 `master`) 分支。
5. 點擊 **Save**。
6. 等待幾分鐘，您的網站將會在 `https://<your-username>.github.io/<repo-name>/` 運行。

## 授權
MIT License
