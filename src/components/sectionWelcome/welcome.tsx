import React from 'react';
import './welcome.css';
import Leafs from '../../assets/img/leafs.png';

export function Welcome() {
  return (
    <div className="welcome-wrapper content-wrapper">
      <div className="welcome-leaf">
        <img src={Leafs} alt="Leafs" className="welcome-leaf-img" />
      </div>
      <div className="welcome-text">
        <h1 className="welcome-title">
          We grow <span className="colored">plants</span> and give you oxygen
        </h1>
        <p className="welcome-subtitle ordinary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
}
