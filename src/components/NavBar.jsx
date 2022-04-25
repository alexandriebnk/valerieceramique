import React from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from './BurgerIcon';

const NavBar = () => {
  const itemsNavBar = ['about', 'shop', 'gallery', 'contact'];
  return (
    <>
      <div className='navbar__burger'>
        <BurgerIcon />
      </div>

      <ul className='navbar__classic'>
        {itemsNavBar.map((item) => (
          <li key={item} className='navbar__classic-item'>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
