import React, { useRef, useState } from 'react';
import image from '../../images/yuYevon.png';
import { useMenuClickOut } from '../../utils/customHooks';
import './index.scss';

/**
 * The Main menu in the header
 */
export default () => {
  const navEl = useRef(null);
  const menuEl = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * used to check if the dropdown is open
   */
  const menuOpenCheck = () => {
    if (navEl.current.classList.contains('menu__nav--open')) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    };
  };

  /**
   * when a user clicks the main menu button
   */
  const handleMenuClick = () => {
    navEl.current.classList.toggle('menu__nav--open')
    menuOpenCheck();
  };

  /**
   * when a user clicks on the save & exit button in the drop down
   */
  const handleSaveClick = () => {
    navEl.current.classList.toggle('menu__nav--open')
    menuOpenCheck();
  };

  // If a user clicks outside of the menu
  useMenuClickOut(navEl, menuEl, menuOpenCheck);

  return (
  <div className="menu">
    <button 
      className="menu__button"
      id="Menu"
      aria-label="Menu"
      onClick={handleMenuClick}
      ref={menuEl}
    >
      <img className={`menu__image ${isMenuOpen && 'menu__image--dropdown-open'}`} src={image} alt="Menu Fluff" />
      Menu
    </button>
    <nav 
      role="navigation" 
      className="menu__nav"
      ref={navEl}
    >
      <ul
        className="menu__dropdown"
        id="MenuDropdown"
        aria-labelledby="Menu"
      >
        <li
          className="menu__item"
        >
          <button
            className="menu__item-button"
            id="MenuSaveButton"
            onClick={handleSaveClick}
            aria-labelledby="Menu"
          >
          Save &#x26; Exit
          </button>
        </li>
      </ul>
    </nav>
  </div>
);
}