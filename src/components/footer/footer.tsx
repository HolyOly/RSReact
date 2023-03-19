import React from 'react';
import './footer.css';
import InstagramSvg from '../../assets/svg/instagram.svg';
import FacebookSvg from '../../assets/svg/facebook.svg';
import GithubSvg from '../../assets/svg/github.svg';
import TelegramSvg from '../../assets/svg/telegram.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content content-wrapper">
        <div className="legacy">©2022</div>
        <div className="school">Rolling Scopes School</div>
        <div className="social">
          <a href="https://www.instagram.com/">
            <InstagramSvg></InstagramSvg>
          </a>
          <a href="https://www.facebook.com/">
            <FacebookSvg></FacebookSvg>
          </a>
          <a href="https://github.com/">
            <GithubSvg></GithubSvg>
          </a>
          <a href="https://t.me/LeeChatelier">
            <TelegramSvg></TelegramSvg>
          </a>
        </div>
      </div>
    </footer>
  );
}
