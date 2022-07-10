import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Loading Text', () => {
  render(<App />);
  const textElement = screen.getByText(/Loading/i);
  expect(textElement).toBeInTheDocument();
});
