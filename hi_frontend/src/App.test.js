import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand link', () => {
  render(<App />);
  // Prefer role-based query to avoid ambiguous text matches
  const el = screen.getByRole('link', { name: /Damsara Driving School/i });
  expect(el).toBeInTheDocument();
});
