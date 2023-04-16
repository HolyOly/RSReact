import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { Search } from './search';
import '@testing-library/jest-dom/extend-expect';

it('should render the component onto the screen', () => {
  render(
    <Provider store={store}>
      <Search onSend={() => {}} />
    </Provider>
  );
  expect(screen.getByTestId('search-input-element')).toBeInTheDocument();
});
