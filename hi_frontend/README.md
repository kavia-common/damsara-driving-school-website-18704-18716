# Damsara Driving School – Frontend

This is a lightweight, elegant, single-page React site for Damsara Driving School.

## Structure

- **src/App.js** – Main SPA with anchor-based navigation (no external router)
- **src/index.css** – Theme variables, layout, and component styles
- **src/App.css** – Minimal overrides
- **src/assets/images/** – Placeholder images (logo.svg needs to be added)

## Theme

Custom Theme (Elegant):
- **primary**: #c3373e (Damsara Red)
- **secondary**: #F59E0B (Warm Amber)
- **background**: #FDF2F8 (Soft Pink)
- **surface**: #FFFFFF (White)
- **text**: #374151 (Slate Gray)

Theming via CSS variables in index.css. The site respects `prefers-color-scheme` and includes a Theme Toggle that persists to localStorage.

### Design Philosophy

The design follows an **Elegant** aesthetic with:
- Sophisticated, graceful styling using soft pastels and gentle gradients
- Refined, rounded components with generous border-radius
- Subtle shadows and smooth transitions for a polished feel
- Mobile-first responsive layout that scales beautifully

## Accessibility

The app follows WCAG 2.1 guidelines with:
- **Semantic landmarks**: `<nav>`, `<main>`, `<footer>` for screen reader navigation
- **Skip-to-content link**: Keyboard users can bypass navigation
- **Keyboard-accessible navigation**: All interactive elements are keyboard operable
- **Focus management**: Smooth scroll targets receive programmatic focus
- **ARIA attributes**: Labels, live regions (testimonials), and form validation feedback
- **Form accessibility**: Proper labels, error messages, and `aria-invalid` states

## Performance

Optimizations include:
- Mobile-first responsive layout with efficient breakpoints
- Lazy-loaded images with `loading="lazy"` attribute
- Inline SVG icons (no external icon library)
- No external router (lightweight anchor-based navigation)
- CSS variables for consistent theming without JavaScript overhead
- Minimal dependencies (React, ReactDOM, React Scripts only)

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 3000)
npm start

# Run tests
npm test

# Build for production
npm run build
```

No environment variables required for local development.

### Project Commands

- `npm start` – Start development server on port 3000
- `npm test` – Run Jest tests with React Testing Library
- `npm run build` – Create optimized production build in `build/`
- `npm run eject` – Eject from Create React App (irreversible)

## Deployment & Integration

### Production Build

To create a production-ready build:

```bash
npm run build
```

This generates an optimized bundle in the `build/` directory with:
- Minified JavaScript and CSS
- Hashed filenames for cache busting
- Optimized images and assets
- Source maps for debugging

### Deployment Options

**Static Hosting (Recommended):**
- **Netlify**: Drag and drop the `build/` folder or connect via Git
- **Vercel**: Import the repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package for easy deployment
- **AWS S3 + CloudFront**: For scalable static hosting
- **Azure Static Web Apps**: Enterprise-grade hosting with CI/CD

**Configuration for Deployment:**
1. Update `package.json` homepage field if deploying to a subdirectory:
   ```json
   "homepage": "https://yourdomain.com/subdirectory"
   ```
2. Update metadata in `public/index.html`:
   - Title tag
   - Meta description
   - Theme color
   - Favicon references

### Integration with Backend/Payment Systems

The app is designed for easy integration:

**Payment Integration:**
- Pricing section CTA buttons currently link to `#contact`
- To integrate payment (Stripe, PayPal, etc.):
  1. Add payment provider SDK to dependencies
  2. Create payment handler components
  3. Update pricing CTA buttons to trigger payment flow
  4. Add environment variables for API keys (use `.env.local`)

**Form Submission:**
- Contact form currently shows success message without backend
- To integrate:
  1. Add API endpoint for form submissions
  2. Update `onSubmit` handler in Contact component
  3. Add loading states and error handling
  4. Consider using services like Formspree, EmailJS, or custom backend

**Analytics:**
- Add Google Analytics or similar in `public/index.html`
- Consider React-specific analytics libraries for SPA tracking

### Environment Variables (Optional)

For integrations requiring secrets:

Create `.env.local` in the root:
```
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_PAYMENT_KEY=pk_test_...
```

Access in code: `process.env.REACT_APP_API_URL`

**Note**: Never commit `.env.local` to version control.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Known Issues

- **Logo Missing**: `src/assets/images/logo.svg` is imported but not present. Add a logo file or update import to use a placeholder.
- **External Links**: Social media links in footer currently point to `#hero` – update with actual URLs when available.

## Future Enhancements

- Add real backend API integration for contact form
- Implement payment gateway for course bookings
- Add content management system (CMS) integration
- Implement booking calendar for lesson scheduling
- Add user authentication for student portal
- Integrate Google Maps for location display
- Add blog section for driving tips and news
