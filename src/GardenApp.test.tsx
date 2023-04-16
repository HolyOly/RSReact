import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { render, screen } from '@testing-library/react';
import { GardenApp } from './GardenApp';

it('should render the component onto the screen', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <GardenApp />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId('search-input-element')).toBeInTheDocument();
});
