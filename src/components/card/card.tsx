import React from 'react';
import { isProductCard } from '../../utils/card';
import LikeFill from '../../assets/svg/like-fill.svg';
import Like from '../../assets/svg/like.svg';
import './card.css';

export function Card(props: ICard) {
  const { cardData } = props;
  const isPC = isProductCard(cardData);

  return (
    <div className="card">
      <div className="card-image">{isPC ? <img src={cardData.src} alt={cardData.alt} /> : ''}</div>
      <div className="card-title">{isPC ? cardData.title : ''}</div>
      {isPC ? (
        <>
          <div className="card-description">{cardData.description}</div>
          <div className="card-like">{cardData.like ? <LikeFill /> : <Like />}</div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
