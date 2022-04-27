import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from './ComponentsSVG/BurgerIcon';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsNavBar = ['about', 'shop', 'gallery', 'contact'];

  const openNavToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar__burger' onClick={openNavToggle}>
        <BurgerIcon isOpen={isOpen} />
      </div>

      <ul
        className={`navbar__classic navbar__classic${
          isOpen ? '--is-open' : ''
        }`}
      >
        {itemsNavBar.map((item) => (
          <li key={item} className='navbar__classic-item'>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
