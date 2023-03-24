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
      <div className="card-image">
        {isPC ? (
          <img src={cardData.src} alt={cardData.alt} className="card-img" />
        ) : (
          <img
            src={cardData.fixedFilePath as string}
            alt={cardData.inputName}
            className="card-img card-img_form"
          />
        )}
      </div>
      <div className="card-title">{isPC ? cardData.title : cardData.inputName}</div>
      {isPC ? (
        <>
          <div className="card-description">{cardData.description}</div>
          <div className="card-like">{cardData.like ? <LikeFill /> : <Like />}</div>
        </>
      ) : (
        <>
          <div className="card-description card-description_form">
            Birthday: {cardData.inputBirthday}
          </div>
          <div className="card-description card-description_form">
            Country: {cardData.inputCountry}
          </div>
          <div className="card-description card-description_form">
            Sex: {cardData.inputMale ? 'male' : 'female'}
          </div>
          <div className="card-description card-description_form">
            Ability to send notifications: {cardData.inputNotification ? 'yes' : 'no'}
          </div>
        </>
      )}
    </div>
  );
}
