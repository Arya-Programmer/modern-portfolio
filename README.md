# Arya Kurdo — Portfolio

A mobile-first personal portfolio for Arya Kurdo, a backend engineer focused on Rust, dependable APIs, and clear systems.

## What is included

- Backend-engineer positioning with Rust as the primary skill
- Work experience and project data stored locally
- Animated 3D reading shelf inspired by the Codrops Animated Books experiment
- Movie poster and review section
- Full social footer
- `/links` route for Instagram, Facebook, and other bios
- Responsive navigation and light/dark themes
- No API, database, environment variable, or backend service required

## Run locally

```bash
npm install
npm start
```

Create a production build with:

```bash
npm run build
```

## Edit portfolio content

All personal content is centralized in [`src/portfolio-data.ts`](src/portfolio-data.ts):

- `socials` controls the footer and `/links`
- `profileLinks` is where Letterboxd and Spotify profile URLs go
- `skills`, `experiences`, and `projects` power the main portfolio
- `books` accepts read/currently-reading entries
- `movies` accepts poster, rating, and review entries

Book covers and movie posters should be placed under `public/images/` and referenced with paths such as `/images/books/example.webp`.

The books and movies arrays intentionally start empty. Their sections display designed empty states until Arya's exact titles and reviews are added.

## Routing note

The app uses browser history routing. Configure the static host to serve `index.html` for unknown paths so `/links` works when opened directly.
