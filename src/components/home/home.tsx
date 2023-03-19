import { cardsData } from '../../data/card_data';
import React from 'react';
import { Welcome } from '../sectionWelcome/welcome';
import './home.css';
import { Card } from '../card/card';
import { Search } from '../search/search';

export function Home() {
  return (
    <div className="home-wrapper position-wrapper">
      <Welcome></Welcome>
      <div className="cards-header content-wrapper">
        <p className="cards-header-title">Service and our projects</p>
        <div className="cards-header-items">
          <div className="cards-header-links">
            <a className="header-item">Gardens</a>
            <a className="header-item">Lawn</a>
            <a className="header-item">Planting</a>
          </div>
          <Search></Search>
        </div>
      </div>
      <div className="cards cards-wrapper content-wrapper">
        {cardsData.map((card, index) => (
          <Card {...card} key={index}></Card>
        ))}
      </div>
    </div>
  );
}
