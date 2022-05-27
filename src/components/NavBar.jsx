import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from './ComponentsSVG/BurgerIcon';

const NavBar = ({ titles }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarTitles = Object.values(titles);

  const openNavToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isNavbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar__burger' onClick={openNavToggle}>
        <BurgerIcon />
      </div>

      <ul
        className={`navbar__classic navbar__classic${
          isNavbarOpen ? '--is-open' : ''
        }`}
      >
        {navbarTitles.map((title) => (
          <li key={title} className='navbar__classic__title'>
            <Link to={`/${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
