import { render, screen } from '@testing-library/react';
import React from 'react';
import { Loader } from './loader';

test('check Loader', () => {
  render(<Loader />);
  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});
