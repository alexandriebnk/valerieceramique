import React from 'react';
import { Link } from 'react-router-dom';

const Informations = () => {
  return (
    <div className='informations'>
      <p className='informations__item'>
        <Link to='/stockists'>Stockists</Link>
      </p>
      <p className='informations__item'>
        <Link to='/legal-notice'>Mentions Légales - Legal Notice</Link>
      </p>
      <p className='informations__item'>
        <Link to='/cgv'>CGV - GTC</Link>
      </p>
      <p className='informations__item'>
        <Link to='/privacy'>Confidentialité - Privacy</Link>
      </p>
    </div>
  );
};

export default Informations;
