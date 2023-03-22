import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

test('should navigate to ... when link is clicked', () => {
  render(<Footer />);
  screen.getByText(/Rolling/);
});
