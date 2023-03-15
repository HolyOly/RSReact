import React from 'react';
import { Welcome } from '../sectionWelcome/welcome';
import './home.css';

export function Home() {
  return (
    <div className="home-wrapper position-wrapper">
      <Welcome></Welcome>
      <div className="cards-header content-wrapper">
        <p className="cards-header-title">Service and our projects</p>
        <div className="cards-header-items">
          <a className="header-item" href="">
            Gardens
          </a>
          <a className="header-item" href="">
            Lawn
          </a>
          <a className="header-item" href="">
            Planting
          </a>
        </div>
      </div>
    </div>
  );
}
