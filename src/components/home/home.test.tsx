import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

describe('Home', () => {
  test('test home class wrapper', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveClass('home-wrapper');
  });

  test('test title', () => {
    render(<Home />);
    const title = screen.getByText('Service and our projects');
    expect(title.classList.contains('cards-header-title')).toBe(true);
  });
});
