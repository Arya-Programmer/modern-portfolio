# Modern Portfolio

A modern, responsive personal portfolio built with **React (TypeScript)** and powered by a **Django REST API**. Designed to showcase your work, skills, and contact information in a clean, dynamic, and scalable way.

## Preview

Coming soon...

---

## Tech Stack

### Frontend

* [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
* [React Router](https://reactrouter.com/) for navigation
* [CSS Modules](https://github.com/css-modules/css-modules) for scoped styling

### Backend (separate repo)

* [Django](https://www.djangoproject.com/) with [Django REST Framework](https://www.django-rest-framework.org/)
* CORS enabled for frontend connection
* Repo: [modern-portfolio-backend](https://github.com/Arya-Programmer/modern-portfolio-backend)

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Arya-Programmer/modern-portfolio.git
cd modern-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

The app will run at:
[http://localhost:3000](http://localhost:3000)

---

## API Configuration

Make sure your Django backend is running at `http://localhost:8000/`.

If needed, create an Axios config:

```ts
// src/api/axios.ts
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: true,
});
```

---

## Features

* Project showcase fetched from the backend
* Easy to customize and scale
* Mobile-friendly and fully responsive
* Clean folder structure and component-based architecture
* Optional dark mode and animations
* Contact form integration (coming soon)

---

## Folder Structure

```
/src
  /api          # Axios or fetch config
  /components   # Reusable UI components
  /hooks        # Custom React hooks
  /context      # React context providers and logic
  /styles       # Global CSS
```

---

## Deployment

You can deploy this project using:

* [Vercel](https://vercel.com/)
* [Netlify](https://netlify.com/)
* Or serve the React build via Django

To build for production:

```bash
npm run build
```

---

## Inspiration

This project was inspired by modern developer portfolios and aims to combine backend flexibility with React's powerful UI layer.

---

## Contact

Feel free to reach out or fork the project!

> Built with care by [Arya](https://github.com/Arya-Programmer)
