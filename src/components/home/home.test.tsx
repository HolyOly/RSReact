import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Home } from './home';

describe('Home', () => {
  test('test home class wrapper', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(container.firstChild).toHaveClass('home-wrapper');
  });

  test('test title', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const title = screen.getByText('Service and our projects');
    expect(title.classList.contains('cards-header-title')).toBe(true);
  });
});
