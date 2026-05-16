# house-360-viewer

Static 360 rental showcase for GitHub Pages. The site uses HTML, CSS, JavaScript, and Pannellum CDN only.

## Required image files

Prepare these files before publishing the full apartment tour:

- `assets/floorplan/floorplan.png`
- `assets/panoramas/livingroom.jpg`
- `assets/panoramas/diningroom.jpg`
- `assets/panoramas/master-bedroom.jpg`
- `assets/panoramas/guest-bedroom-1.jpg`
- `assets/panoramas/guest-bedroom-2.jpg`
- `assets/panoramas/balcony.jpg`
- `assets/panoramas/outside.jpg`

If a panorama is missing, the site will keep running and show a friendly message with the missing file path.

## Adjusting floorplan points

Floorplan point positions are configured in `script.js` inside the `rooms` array. Update each room's `map.x` and `map.y` percentage values to move the point on the floorplan.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the setting and wait for GitHub Pages to publish.
