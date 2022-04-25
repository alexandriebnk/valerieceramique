import React from 'react';
import Subscription from './Subscription';
import Social from './Social';
import Informations from './Informations';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_content'>
        <div className='footer_content_subscription item'>
          <Subscription />
        </div>
        <div className='footer_content_social item'>
          <Social />
        </div>
        <div className='footer_content_informations item'>
          <Informations />
        </div>
        <div className='footer_content_copyright item'>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
