import React from 'react';
import './card.css';

export function Card(props: ICard) {
  const { cardData } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={cardData.fixedFilePath as string}
          alt={cardData.name}
          className="card-img card-img_form"
        />
      </div>
      <div className="card-title">{cardData.name}</div>
      <div className="card-description card-description_form">Birthday: {cardData.birthday}</div>
      <div className="card-description card-description_form">Country: {cardData.country}</div>
      <div className="card-description card-description_form">
        Sex: {cardData.gender === 'Female' ? 'female' : 'male'}
      </div>
      <div className="card-description card-description_form">
        Ability to send notifications: {cardData.terms === 'accepted' ? 'yes' : 'no'}
      </div>
    </div>
  );
}
