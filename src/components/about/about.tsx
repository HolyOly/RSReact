import React from 'react';
import './about.css';
import HousePlant from '../../assets/img/houseplant.png';

export function About() {
  return (
    <div className="about-wrapper content-wrapper">
      <div className="about-description">
        <h1 className="about-title">
          We are <span className="about-title_accent">professional experienced</span> gardeners
        </h1>
        <div className="about-text ordinary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.{' '}
        </div>
      </div>
      <div className="about-img">
        <img src={HousePlant} alt="" />
      </div>
    </div>
  );
}
