# 360 Rental Showcase

A static 360 rental showcase website built with HTML, CSS, JavaScript, and the Pannellum CDN.

## Project files

- `index.html` - page structure and Pannellum CDN links
- `style.css` - responsive modern styling
- `script.js` - Pannellum viewer setup
- `assets/panoramas/livingroom.jpg` - required 360 panorama image

## Required panorama image

The site expects the panorama image at:

```text
assets/panoramas/livingroom.jpg
```

If this file is missing, add your equirectangular 360 image at that exact path before publishing or the viewer will not display the room.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the branch you pushed, usually `main`.
6. Choose `/ (root)` as the folder.
7. Click **Save**.
8. Wait for GitHub Pages to publish the site.

The site is static and does not require React, Vue, Node.js, or a build step.
