import React from 'react';
import { render, screen } from '@testing-library/react';
import { Welcome } from './welcome';
import { describe, it, expect } from 'vitest';

describe('Welcome image', () => {
  it('Render Welcome component', () => {
    render(<Welcome />);
    expect(screen.getByAltText('Leafs')).toBeInTheDocument();
  });
});
