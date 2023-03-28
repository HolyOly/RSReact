import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from './search';
import '@testing-library/jest-dom/extend-expect';

it('should render the component onto the screen', () => {
  render(<Search />);
  expect(screen.getByTestId('search-input-element')).toBeInTheDocument();
});
