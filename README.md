# Savora Restaurant Website

A modern, minimal, responsive restaurant website built with **HTML, CSS, and JavaScript**.

## Features

- Hero section with food-related background image
- Food menu cards (name, price, image)
- Search food item
- Filter by category (`Burger`, `Pizza`, `Drinks`)
- Staff section with photo and designation
- Food image gallery
- About and Contact sections
- Sticky navigation bar
- Smooth hover animations
- Admin-editable JSON menu (stored in browser `localStorage`)
- Free deployment with GitHub Pages

## Project Structure

- `index.html` → page structure/sections
- `styles.css` → responsive styling and animations
- `script.js` → rendering, search/filter, JSON editor logic
- `Photos/` → local images used by the site
- `.github/workflows/deploy-pages.yml` → automatic GitHub Pages deployment

## How to Run

Use any static server (recommended), for example VS Code Live Server.

## Free Hosting

This repository is configured for **GitHub Pages**, which is free for static websites.

### Publish Steps

1. Push this repository to GitHub on the `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment**, choose **Source: GitHub Actions**.
5. Wait for the `Deploy static site to Pages` workflow to finish.

Your public site URL should be:

`https://sifat-07.github.io/GW-Static-Website/`

If GitHub shows a different Pages URL in the repository settings, use that one.

## Edit Menu Data

### Option 1: Edit `script.js`
Each item should look like:

```json
{
  "id": 1,
  "name": "Classic Beef Burger",
  "price": 11.99,
  "category": "Burger",
  "image": "https://..."
}
```

### Option 2: Use Admin Menu JSON Editor (in website)
1. Open the Contact section.
2. Update JSON in the text area.
3. Click **Save JSON**.
4. Data is stored in browser `localStorage`.
5. Click **Reset to Default** to restore original menu.

## Allowed Categories

Use one of these category values for filter compatibility:

- `Vape`
- `Bong`
- `Exclusive Items`
- `Joint`
- `Bundle Deals`
- `Accessories`

## Notes

- Menu data currently lives in `script.js` and can also be changed in the browser through `localStorage`.
- Search and filters are applied together.
