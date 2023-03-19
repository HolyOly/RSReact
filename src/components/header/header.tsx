import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/svg/logo.svg';
import './header.css';

enum RouterPathes {
  HOME = '/',
  ABOUT = '/about',
}

export class Header extends React.Component {
  state = { active: RouterPathes.HOME };

  render() {
    return (
      <header className="header">
        <div className="header-content content-wrapper">
          <div className="logo">
            <LogoSvg></LogoSvg>
            <span>Plants</span>
          </div>
          <div className="links">
            <Link
              to={RouterPathes.HOME}
              className={`links-item ${
                this.state.active === RouterPathes.HOME ? 'active-path' : ''
              }`}
              onClick={() => this.setState({ active: RouterPathes.HOME })}
            >
              Home
            </Link>
            <Link
              to={RouterPathes.ABOUT}
              className={`links-item ${
                this.state.active === RouterPathes.ABOUT ? 'active-path' : ''
              }`}
              onClick={() => this.setState({ active: RouterPathes.ABOUT })}
            >
              About us
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
