import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/svg/logo.svg';
import './header.css';

enum RouterPathes {
  HOME = '/',
  ABOUT = '/about',
}

export function Header() {
  const [active, setActiveLink] = useState('/');

  return (
    <header className="header">
      <div className="header-content content-wrapper">
        <div className="logo">
          <img src={LogoSvg} className="logo-img" alt="logo" />
          <span>Plants</span>
        </div>
        <div className="links">
          <Link
            to={RouterPathes.HOME}
            className={`links-item ${active === RouterPathes.HOME ? 'active-path' : ''}`}
            onClick={() => setActiveLink(RouterPathes.HOME)}
          >
            Home
          </Link>
          <Link
            to={RouterPathes.ABOUT}
            className={`links-item ${active === RouterPathes.ABOUT ? 'active-path' : ''}`}
            onClick={() => setActiveLink(RouterPathes.ABOUT)}
          >
            About us
          </Link>
        </div>
      </div>
    </header>
  );
}
