import React from 'react';
import { Menu, NotificationBanner } from '../../containers';
import './styles.scss';

export default () => (
  <header className="header" role="banner">
    <div className="header__menu">
      <Menu />
    </div>
    <h1 className="header__title">
      Final Fantasy X Trivia!
    </h1>
    <NotificationBanner />
  </header>
);