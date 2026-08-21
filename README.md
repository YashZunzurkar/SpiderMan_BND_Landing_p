# Spider-Man: Brand New Day - React Vite SPA

A premium, multi-route fan concept inspired by Sony Pictures and Marvel promotional experiences. The project is built as a responsive React single-page application with a cinematic visual system, interactive character dossiers, a full movie timeline, a trailer hub, and BookMyShow ticket handoffs.

## Tech stack

- React (JSX) + Vite
- React Router DOM
- Tailwind CSS 3
- React Icons
- Custom CSS only for reusable cinematic motion and web effects

## Routes

- `/` - Home / movie overview
- `/timeline` - Complete Spider-Man timeline
- `/characters` - Auto-rotating interactive character dossiers
- `/trailer` - Featured embedded trailer and related videos

## Run locally

```bash
npm install
npm run dev
```

Create an optimized production build with:

```bash
npm run build
```

## Structure

```text
src/
  components/   shared navigation, cards, loader, CTAs and footer
  data/         timeline, characters and video data
  pages/        route-level UI
  App.jsx       route composition
  index.css     Tailwind and cinematic effects
public/assets/  generated visual artwork
```

## AI tools used

OpenAI Image Generation (built-in mode) created the original cityscape, web-vortex, and hero artwork in `public/assets/`. The React architecture, design system, content layout, and interactions were implemented for this project.

## Booking CTA

Every Book Tickets control opens the official BookMyShow movie page in a new tab. Availability may localize by city.
