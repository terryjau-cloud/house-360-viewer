# house-360-viewer / 360 租屋展示

Static 360 rental showcase for GitHub Pages.

這是一個可部署到 GitHub Pages 的 360 租屋展示網站，前台介面以繁體中文為主。網站使用 HTML、CSS、JavaScript、Pannellum CDN 與 Vite 前端 build 流程，不需要 React、Vue 或後端。

## Project structure / 專案結構

- `src/` - 原始 HTML、CSS、JavaScript
- `public/` - build 時原樣複製的靜態圖片資產
- `dist/` - `npm run build` 產生的部署檔案
- `.github/workflows/pages.yml` - GitHub Pages 自動 build 與部署流程

## Required image files / 必備圖片檔案

發布完整租屋導覽前，請準備以下圖片檔案：

- `assets/floorplan/floorplan.png`
- `assets/panoramas/livingroom.jpg`
- `assets/panoramas/diningroom.jpg`
- `assets/panoramas/master-bedroom.jpg`
- `assets/panoramas/masterbathroom.jpg`
- `assets/panoramas/guest-bedroom-1.jpg`
- `assets/panoramas/guest-bedroom-2.jpg`
- `assets/panoramas/guestbathroom.jpg`
- `assets/panoramas/balcony.jpg`
- `assets/panoramas/outside.jpg`

If a panorama is missing, the site will keep running and show a friendly message with the missing file path.

如果某張 360 圖片不存在，前台會顯示友善提示與缺少的檔案路徑。

## Room names / 房間名稱

前台使用以下繁體中文房間名稱：

- 客廳
- 餐廳
- 主臥
- 主衛浴
- 客臥 1
- 客臥 2
- 客衛浴
- 陽台
- 房子外觀 / 門外

## Adjusting floorplan points / 調整小地圖定位點

Floorplan point positions are configured in `script.js` inside the `rooms` array.

格局圖定位點集中設定在 `script.js` 的 `rooms` 陣列中。調整每個房間的 `map.x` 與 `map.y` 百分比數值，即可移動小地圖上的定位點。

## Build / 建置

Install dependencies:

```bash
npm install
```

Run local development server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Production files are output to `dist/`. JavaScript and CSS are minified, source maps are disabled, and `console` / `debugger` statements are removed during build.

部署檔案會輸出到 `dist/`。Build 後的 JavaScript 與 CSS 會被壓縮，並移除 `console` / `debugger`。

## GitHub Pages deployment / GitHub Pages 部署

This project deploys the generated `dist/` folder through GitHub Actions.

這個專案透過 GitHub Actions 建置並部署 `dist/`。

1. Push changes to the `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Set **Source** to **GitHub Actions**.
5. Wait for the **Deploy GitHub Pages** workflow to finish.

If GitHub Pages is still configured as **Deploy from a branch**, GitHub may show the repository README instead of the built site. Change the Pages source to **GitHub Actions** so the generated `dist/` folder is deployed.

如果 GitHub Pages 仍設定為 **Deploy from a branch**，GitHub 可能會顯示 README 而不是建置後網站。請將 Pages 來源改成 **GitHub Actions**，讓 workflow 部署產生的 `dist/`。
