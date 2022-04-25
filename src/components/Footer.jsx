import React from 'react';
import Subscription from './Subscription';
import Social from './Social';
import Informations from './Informations';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__content-subscription item'>
          <Subscription />
        </div>
        <div className='footer__content-social item'>
          <Social />
        </div>
        <div className='footer__content-informations item'>
          <Informations />
        </div>
        <div className='footer__content-copyright item'>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
