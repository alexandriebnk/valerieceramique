import React from 'react';
import Content from '../components/Content';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page'>
      HOMEPAGE
      <div className='home-page_content'>
        <Link to='/about'>LE LINK</Link>
        <Content />
      </div>
    </div>
  );
};

export default HomePage;
