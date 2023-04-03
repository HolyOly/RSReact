import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Card } from './card';
import { describe, it, expect } from 'vitest';
import { cardsData } from '../../data/card_data';
import { cardTestDataForm } from '../../data/test_data';

describe('Card', () => {
  it('Test class of product card component', () => {
    const { container } = render(<Card cardData={cardsData[0]} />);
    expect((container.firstChild as Element).classList.contains('card')).toBe(true);
  });

  it('Test class of form card component', () => {
    const { container } = render(<Card cardData={{ ...cardTestDataForm }} />);
    expect((container.firstChild as Element).classList.contains('card')).toBe(true);
  });

  it('Render labels of card form component', () => {
    render(<Card cardData={cardTestDataForm} />);

    expect(screen.getByText(cardTestDataForm.name as string)).toBeInTheDocument();
    expect(screen.getByText(`Birthday: ${cardTestDataForm.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`Country: ${cardTestDataForm.country}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Sex: ${cardTestDataForm.gender === 'Female' ? 'female' : 'male'}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `Ability to send notifications: ${cardTestDataForm.terms === 'accepted' ? 'yes' : 'no'}`
      )
    ).toBeInTheDocument();
  });

  it('check for a like', async () => {
    const { container } = render(<Card cardData={cardsData[0]} />);
    const svg = container.querySelector('svg');
    const parentDiv = (svg as SVGElement).parentElement as HTMLElement;

    expect(svg).toBeInTheDocument();
    expect(parentDiv).toHaveClass('card-like');
  });

  it('check if there is no like in the form card', async () => {
    const { container } = render(<Card cardData={cardTestDataForm} />);
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('additional check for a like', async () => {
    const { container } = render(<Card cardData={cardsData[0]} />);
    const svgEl = container.querySelector('empty-like-svg') as SVGElement;
    waitFor(() => expect(svgEl as SVGElement).toHaveClass('empty-like-svg'));
  });
});
