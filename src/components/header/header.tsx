import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/svg/logo.svg';
import './header.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurPage, updatePage } from '../../features/currentPage/currentPage';

enum RouterPathes {
  HOME = '/',
  ABOUT = '/about',
  CONTACTS = '/contacts',
}

export function Header() {
  const curPage = useAppSelector(selectCurPage);
  const dispatch = useAppDispatch();

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
            className={`links-item ${curPage === RouterPathes.HOME ? 'active' : ''}`}
            onClick={() => dispatch(updatePage(`${RouterPathes.HOME}`))}
          >
            Home
          </Link>
          <Link
            to={RouterPathes.ABOUT}
            className={`links-item ${curPage === RouterPathes.ABOUT ? 'active' : ''}`}
            onClick={() => dispatch(updatePage(`${RouterPathes.ABOUT}`))}
          >
            About us
          </Link>
          <Link
            to={RouterPathes.CONTACTS}
            className={`links-item ${curPage === RouterPathes.CONTACTS ? 'active' : ''}`}
            onClick={() => dispatch(updatePage(`${RouterPathes.CONTACTS}`))}
          >
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
}
