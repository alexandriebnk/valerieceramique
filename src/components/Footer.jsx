import React from 'react';
import Subscription from './Subscription';
import Social from './Social';
import Informations from './Informations';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_content'>
        <div className='footer_content_subscription'>
          <Subscription />
        </div>
        <div className='footer_content_social'>
          <Social />
        </div>
        <div className='footer_content_informations'>
          <Informations />
        </div>
        <div className='footer_content_copyright'>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
