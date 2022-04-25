import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ShopCart from './ShopCart';
import Logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1 aria-label='Valérie Céramique'>
          <img
            src={Logo}
            className='header__logo'
            alt='logo'
            draggable='false'
          />
        </h1>
      </Link>
      <h2 className='header__title'>Valérie Céramique</h2>
      <div className='header__navbar'>
        <NavBar />
      </div>
      <div className='header__shop-cart'>
        <ShopCart />
      </div>
    </div>
  );
};

export default Header;
