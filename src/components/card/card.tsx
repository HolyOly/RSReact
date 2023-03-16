import { Icon } from '../icon/icon';
import React from 'react';
import LikeFill from '../../assets/svg/like-fill.svg';
import Like from '../../assets/svg/like.svg';
import './card.css';

export function Card(props: ICard) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-description">{props.description}</div>
      <div className="card-like">
        {props.like ? (
          <Icon src={LikeFill} color={'#499A18'}></Icon>
        ) : (
          <Icon src={Like} color={'#499A18'}></Icon>
        )}
      </div>
    </div>
  );
}
