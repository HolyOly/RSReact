import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Card } from './card';
import { CardApi } from './apiCard';
import { describe, it, expect } from 'vitest';
import { cardsData } from '../../data/card_data';
import { apiCardData, apiCardData1, apiCardData2, cardTestDataForm } from '../../data/test_data';
import { Modal } from '../modal/modal';

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

    const gender = screen.getByText(/Sex:/);
    const notif = screen.getByText(/Ability to send notifications:/);

    expect(screen.getByText(cardTestDataForm.name as string)).toBeInTheDocument();
    expect(screen.getByText(`Birthday: ${cardTestDataForm.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`Country: ${cardTestDataForm.country}`)).toBeInTheDocument();

    expect(gender).toBeInTheDocument();
    expect(gender).toHaveClass('card-description_form');
    expect(gender).toHaveClass('card-description');

    expect(notif).toBeInTheDocument();
    expect(notif).toHaveClass('card-description_form');
    expect(notif).toHaveClass('card-description');

    if (cardTestDataForm.gender === 'Male') {
      expect(screen.getByText(/male/)).toBeInTheDocument();
      expect(screen.getByText(/Sex: male/)).toBeInTheDocument();
    } else {
      expect(screen.getByText(/Sex: female/)).toBeInTheDocument();
    }

    if (cardTestDataForm.terms === 'accepted') {
      expect(screen.getByText(/yes/)).toBeInTheDocument();
    } else {
      expect(screen.getByText(/no/)).toBeInTheDocument();
    }
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

  it('test api card', async () => {
    render(<CardApi {...apiCardData} />);
    expect(screen.getByText(apiCardData.likes as number)).toBeInTheDocument();
  });

  it('test api card', async () => {
    render(<CardApi {...apiCardData} />);
    const card = screen.getByText(apiCardData.likes as number);
    fireEvent.click(card);
    const { container } = render(<Modal />);
    expect(container).toBeInTheDocument();
  });

  it('additional check for a like', async () => {
    const { container } = render(<CardApi {...apiCardData} />);
    const svgEl = container.querySelector('empty-like-svg') as SVGElement;
    waitFor(() => expect(svgEl as SVGElement).toHaveClass('empty-like-svg'));
  });

  it('additional check for a like', async () => {
    render(<CardApi {...apiCardData} />);
    expect(screen.getByText(apiCardData.description)).toBeInTheDocument();
  });

  it('additional check for a like', async () => {
    const { container } = render(<CardApi {...apiCardData} />);
    const svgEl = container.querySelector('fill-like-svg') as SVGElement;
    waitFor(() => expect(svgEl as SVGElement).toHaveClass('fill-like-svg'));
  });

  it('additional check for a like', async () => {
    const { container } = render(<CardApi {...apiCardData2} />);
    const svgEl = container.querySelector('empty-like-svg') as SVGElement;
    waitFor(() => expect(svgEl as SVGElement).toHaveClass('empty-like-svg'));
  });

  it('additional check for a like', async () => {
    render(<CardApi {...apiCardData} />);
    const inputMale = screen.getByTestId('apiCardBackground');
    expect(inputMale).toHaveStyle(`backgroundImage: url(${apiCardData.urls.small})`);
  });

  it('additional check for a like', async () => {
    render(<CardApi {...apiCardData1} />);
    expect(screen.getByText(apiCardData.alt_description)).toBeInTheDocument();
  });

  it('additional check for a like', async () => {
    render(<CardApi {...apiCardData} />);
    expect(screen.getByText(apiCardData.alt_description)).toBeInTheDocument();
  });

  it('test api card', async () => {
    render(<CardApi {...apiCardData1} />);
    const card = screen.getByText(apiCardData1.likes as number);
    fireEvent.click(card);
    const { container } = render(<Modal />);
    expect(container).toBeInTheDocument();
    expect(screen.getByText(apiCardData1.tags[0].title)).toBeInTheDocument();
  });
});
