import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/svg/logo.svg';
import './header.css';

enum RouterPathes {
  HOME = '/',
  ABOUT = '/about',
  CONTACTS = '/contacts',
}

export function Header() {
  const [activeTab, setActiveTab] = useState(`${RouterPathes.HOME}`);

  return (
    <header className="header">
      <div className="header-content content-wrapper">
        <div className="logo">
          <LogoSvg />
          <span>Plants</span>
        </div>
        <div className="links">
          <Link
            to={RouterPathes.HOME}
            className={`links-item ${activeTab === RouterPathes.HOME ? 'active' : ''}`}
            onClick={() => setActiveTab(`${RouterPathes.HOME}`)}
          >
            Home
          </Link>
          <Link
            to={RouterPathes.ABOUT}
            className={`links-item ${activeTab === RouterPathes.ABOUT ? 'active' : ''}`}
            onClick={() => setActiveTab(`${RouterPathes.ABOUT}`)}
          >
            About us
          </Link>
          <Link
            to={RouterPathes.CONTACTS}
            className={`links-item ${activeTab === RouterPathes.CONTACTS ? 'active' : ''}`}
            onClick={() => setActiveTab(`${RouterPathes.CONTACTS}`)}
          >
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
}
