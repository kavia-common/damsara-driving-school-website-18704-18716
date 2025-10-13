// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill window.matchMedia for jsdom so components using it (e.g., prefers-color-scheme)
// don't crash during tests. jsdom doesn't implement matchMedia by default.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addListener: () => {}, // deprecated but included for compatibility
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    onchange: null,
    dispatchEvent: () => false,
  });
}
