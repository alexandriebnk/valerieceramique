import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from './ComponentsSVG/BurgerIcon';
import { CartContext } from '../context/cart.context';

const NavBar = ({ titles }) => {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(CartContext);
  const navbarTitles = Object.values(titles);

  const openNavToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const removeNavbar = () => {
    document.body.style.overflow = 'auto';
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavbarOpen]);

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
            <Link to={`/${title}`} onClick={removeNavbar}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
