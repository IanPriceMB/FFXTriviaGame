import React, { useRef, useState } from 'react';
import image from '../../images/yuYevon.png';
import { useClickOutside } from '../../utils/customHooks';
import './index.scss';

export default () => {
  const navEl = useRef(null);
  const menuEl = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickOutside = () => { menuEl.current.classList.remove('menu__nav--open'); };
  useClickOutside(menuEl, navEl, onClickOutside);

  const menuOpenCheck = () => {
    menuEl.current.classList.contains('menu__nav--open') 
      ? setIsMenuOpen(true) 
      : setIsMenuOpen(false); 
  };

  const handleMenuClick = () => { menuEl.current.classList.toggle('menu__nav--open'); menuOpenCheck(); };

  const handleSaveClick = () => { menuEl.current.classList.toggle('menu__nav--open'); menuOpenCheck(); };

  return (
  <div className="menu">
    <button  className="menu__button" id="Menu" aria-label="Menu" onClick={handleMenuClick} ref={navEl}>
      <img className={`menu__image ${isMenuOpen && 'menu__image--dropdown-open'}`} src={image} alt="Menu Fluff" />
      Menu
    </button>
    <nav role="navigation" className="menu__nav" ref={menuEl}>
      <ul className="menu__dropdown" aria-labelledby="Menu">
        <li className="menu__item">
          <button className="menu__item-button" id="MenuSaveButton" onClick={handleSaveClick} aria-labelledby="Menu">
            Save &#x26; Exit
          </button>
        </li>
      </ul>
    </nav>
  </div>
);
}