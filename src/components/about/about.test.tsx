import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './about';
import { describe, it, expect } from 'vitest';

describe('Welcome image', () => {
  it('Render Welcome component', () => {
    render(<About />);
    expect(screen.getByAltText(/Houseplant/)).toBeInTheDocument();
  });
});
