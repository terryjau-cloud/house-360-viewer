# house-360-viewer / 360 租屋展示

Static 360 rental showcase for GitHub Pages.

這是一個可部署到 GitHub Pages 的 360 租屋展示網站，前台介面以繁體中文為主。網站只使用 HTML、CSS、JavaScript 與 Pannellum CDN，不需要 React、Vue 或 Node.js。

## Required image files / 必備圖片檔案

發布完整租屋導覽前，請準備以下圖片檔案：

- `assets/floorplan/floorplan.png`
- `assets/panoramas/livingroom.jpg`
- `assets/panoramas/diningroom.jpg`
- `assets/panoramas/kitchen.jpg`
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
- 廚房
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

## GitHub Pages deployment / GitHub Pages 部署

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the setting and wait for GitHub Pages to publish.
