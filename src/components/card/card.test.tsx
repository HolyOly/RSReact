import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card';
import { describe, it, expect } from 'vitest';
import { cardsData } from '../../data/card_data';

describe('Welcome image', () => {
  it('Render Card component', () => {
    const { container } = render(<Card cardData={cardsData[0]} />);
    expect((container.firstChild as Element).classList.contains('card')).toBe(true);
  });
});
