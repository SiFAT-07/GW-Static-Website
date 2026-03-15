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

## Project Structure

- `index.html` → page structure/sections
- `styles.css` → responsive styling and animations
- `script.js` → rendering, search/filter, JSON editor logic
- `menu.json` → default editable menu source

## How to Run

Use any static server (recommended), for example VS Code Live Server.

## Edit Menu Data

### Option 1: Edit `menu.json`
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

- `Burger`
- `Pizza`
- `Drinks`

## Notes

- If `menu.json` fails to load, app uses fallback menu data from `script.js`.
- Search and filters are applied together.
