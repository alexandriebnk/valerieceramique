import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const itemsNavBar = ['about', 'shop', 'gallery', 'contact'];
  return (
    <Fragment>
      <ul className='navbar'>
        {itemsNavBar.map((item) => (
          <li key={item} className='navbar_item'>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NavBar;
