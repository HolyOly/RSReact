import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/svg/logo.svg';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-content content-wrapper">
        <div className="logo">
          <img src={LogoSvg} className="logo-img" alt="logo" />
          <span>Plants</span>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
        </div>
      </div>
    </header>
  );
}
