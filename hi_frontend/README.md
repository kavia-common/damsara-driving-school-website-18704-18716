# Damsara Driving School – Frontend

This is a lightweight, elegant, single-page React site for Damsara Driving School.

## Structure

- src/App.js – Main SPA with anchor-based navigation (no external router)
- src/index.css – Theme variables, layout, and component styles
- src/App.css – Minimal overrides
- src/assets/images – Logo and placeholder images

## Theme

Custom Theme (Elegant):
- primary: #c3373e
- secondary: #F59E0B
- background: #FDF2F8
- surface: #FFFFFF
- text: #374151

Theming via CSS variables in index.css. The site respects `prefers-color-scheme` and includes a Theme Toggle that persists to localStorage.

## Accessibility

- Semantic landmarks: nav, main, footer
- Skip-to-content link
- Keyboard-accessible navigation and controls
- Focus management on smooth scroll target
- Testimonials area uses aria-live

## Performance

- Mobile-first responsive layout
- Lazy-loaded images
- Inline SVG icons
- No external router

## Development

- npm start – start dev server on port 3000
- npm test – run tests
- npm run build – production build

No environment variables required for local development.
