import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Navbar', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if Navbar text (example: "Home") is visible
  const navElement = screen.getByText(/home/i);
  expect(navElement).toBeInTheDocument();
});

test('renders Footer', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if Footer contains some text (you can change based on your Footer content)
  const footerElement = screen.getByText(/footer/i);
  expect(footerElement).toBeInTheDocument();
});
