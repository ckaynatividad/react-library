import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders', async () => {
  const container = render(<App />);
  const linkElement = screen.findByText('Booklist');
  expect(container).toMatchSnapshot();
  expect(linkElement).toBeInTheDocument();
});