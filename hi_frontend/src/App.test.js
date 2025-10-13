import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand link', () => {
  render(<App />);
  // Prefer role-based query; try exact accessible name first to avoid ambiguity.
  let brand;
  try {
    brand = screen.getByRole('link', { name: /^Damsara Driving School$/i });
  } catch (e) {
    // Fallback: if accessible name aggregation still causes collisions, pick the link with class 'brand'
    const links = screen.getAllByRole('link', { name: /Damsara Driving School/i });
    brand = links.find((l) => l.classList.contains('brand'));
  }
  expect(brand).toBeInTheDocument();
});
