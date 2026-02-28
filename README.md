# HUMX Hotel Website

A clean, responsive hotel website built with Vite, React, JavaScript, and Tailwind CSS.

## Stack
- Vite
- React (JavaScript)
- React Router
- Tailwind CSS
- GSAP (loaded in-page for section motion)

## Features
- Fixed hero/banner layout with layered scroll sections
- Fully responsive pages across mobile, tablet, and desktop
- Room catalog with four room types:
  - Regular
  - Deluxe
  - Suite
  - Presidential
- Room detail pages with streamlined booking form
- Local booking persistence via `localStorage` (`lodr_bookings`)
- Booking confirmation and booking history pages

## Routes
- `/` Home
- `/our-hotel` Hotel profile
- `/rooms` Room listing
- `/rooms/:roomId` Room details + booking
- `/booking` Booking redirect route
- `/booking/view` Booking history
- `/confirmation` Booking confirmation
- `/contact` Contact page

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Project Notes
- The project is JavaScript-only (no TypeScript).
- Room pricing is formatted in Nigerian Naira (NGN).
- Design language and section styling are aligned across all pages.
