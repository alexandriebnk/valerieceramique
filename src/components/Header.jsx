import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ShopCart from './ShopCart';
import Logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__top'>
        <Link to='/'>
          <h1 aria-label='Valérie Céramique'>
            <img
              src={Logo}
              className='header__top-logo'
              alt='logo'
              draggable='false'
            />
          </h1>
        </Link>
        <h2 className='header__top-title'>Valérie Céramique</h2>
      </div>
      <div className='header__bottom'>
        <div className='header__bottom-navbar'>
          <NavBar />
        </div>
        <div className='header__bottom-shop-cart'>
          <ShopCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
