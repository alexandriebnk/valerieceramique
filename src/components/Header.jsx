import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import NavBar from './NavBar';
import Logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1 aria-label='Valérie Céramique'>
          <img
            src={Logo}
            className='header_logo'
            alt='logo'
            draggable='false'
          />
        </h1>
      </Link>
      <h2 className='header_title'>Valérie Céramique</h2>
      <NavBar />
    </div>
  );
};

export default Header;
