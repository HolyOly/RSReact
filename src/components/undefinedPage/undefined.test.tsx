import { render } from '@testing-library/react';
import React from 'react';
import { Undefined } from './404';

test('check counter', () => {
  const { getByText } = render(<Undefined />);
  const errorText = getByText('404');
  expect(errorText).toBeTruthy();
});
