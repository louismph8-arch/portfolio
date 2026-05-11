# DataPulse — Analytics SaaS Platform

> Real-time analytics dashboard built as a portfolio project. Interactive charts, live data simulation, CSV exports, and a polished dark-mode UI with 3D globe animation.

![DataPulse Preview](https://img.shields.io/badge/Status-Live%20Demo-10b981?style=flat-square) ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white)

---

## Live Demo

**[datapulse-analytics.netlify.app](https://datapulse-analytics.netlify.app)** ← replace with your URL

---

## Features

- **3D Globe** — Three.js animated sphere with arc connections, dot grid, and atmospheric glow
- **Auth flow** — Login / signup overlay with Google OAuth UI (demo mode)
- **Real-time KPIs** — Revenue, active users, conversion rate, churn — live-updated every 4s
- **Interactive charts** — Area (revenue + sessions), Donut (traffic sources), Bar (acquisition)
- **Activity feed** — Live event log with auto-prepend simulation
- **Heatmap** — Weekly activity grid
- **SVG Gauge** — Uptime SLA visual
- **CSV export** — Revenue, users, and accounts — one click, no backend required
- **Aurora background** — CSS animated radial gradients with noise texture
- **Glassmorphism** — Frosted-glass cards, floating data labels on globe
- **Fully accessible** — ARIA roles, keyboard nav, focus states, `prefers-reduced-motion`
- **Responsive** — 375px → 1440px

---

## Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 semantic |
| Styles | CSS custom properties, CSS Grid, Flexbox |
| 3D | Three.js r128 (CDN) |
| Charts | Chart.js 4.4 (CDN) |
| Fonts | Fira Code + Fira Sans (Google Fonts) |
| Deploy | GitHub Pages / Netlify (zero build step) |

---

## Project Structure

```
datapulse/
├── index.html      # Landing page — globe 3D, features, pricing, CTA
└── dashboard.html  # SaaS dashboard — auth, KPIs, charts, exports
```

---

## Run Locally

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/datapulse-analytics.git
cd datapulse-analytics

# Open directly (no build step needed)
open index.html

# Or serve with any static server
npx serve .
python -m http.server 8080
```

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#030712` (OLED black) |
| Card | `rgba(15,23,42,0.85)` |
| Primary | `#6366f1` (Indigo) |
| Secondary | `#06b6d4` (Cyan) |
| Accent | `#f59e0b` (Amber) |
| Success | `#10b981` (Green) |
| Font Heading | Fira Code |
| Font Body | Fira Sans |
| Border radius | 16px cards, 12px buttons, 100px pills |

---

## Screenshots

| Landing | Dashboard |
|---------|-----------|
| Globe 3D + aurora hero | Auth overlay → full dashboard |
| Feature cards + pricing | KPI cards + Area chart + Donut |

---

## Roadmap

- [ ] Next.js 14 (App Router) migration
- [ ] Real WebSocket data via Supabase Realtime
- [ ] Drag-and-drop dashboard builder
- [ ] PDF export (jsPDF)
- [ ] Dark / light mode toggle
- [ ] i18n (EN / FR)

---

## License

MIT — free to use, modify, and showcase in your own portfolio.

---

*Built by [Louis](https://github.com/louismph8-arch) · Portfolio project · 2026*
