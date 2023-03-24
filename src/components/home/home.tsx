import { cardsData } from '../../data/card_data';
import React from 'react';
import { Welcome } from '../sectionWelcome/welcome';
import './home.css';
import { Card } from '../card/card';
import { Search } from '../search/search';

export function Home() {
  return (
    <div className="home-wrapper position-wrapper">
      <Welcome />
      <div className="cards-header content-wrapper">
        <p className="cards-header-title">Service and our projects</p>
        <div className="cards-header-items">
          <Search />
        </div>
      </div>
      <div className="cards cards-wrapper content-wrapper">
        {cardsData.map((card, index) => (
          <Card cardData={card} key={index} />
        ))}
      </div>
    </div>
  );
}
