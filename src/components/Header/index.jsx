import React from 'react';
import { Menu, NotificationBanner } from '../../containers';
import './styles.scss';

/**
 * Main app header
 * @param {string} title - app title
 */
export default ({ title }) => (
  <header
    className="header"
    id="Header"
    role="banner"
  >
    <div 
      className="header__menu"
      id="HeaderMenu"
    >
      <Menu />
    </div>
    <h1
      className="header__title"
      id="HeaderTitle"
    >
      {title}  
    </h1>
    <NotificationBanner />
  </header>
);