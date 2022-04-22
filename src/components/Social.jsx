import React from 'react';
import Instagram from '../assets/instagram.svg';
import Mail from '../assets/mail.png';

const Social = () => {
  return (
    <div className='social'>
      <img src={Instagram} alt='instagram' className='social_instagram'></img>
      <img src={Mail} alt='mail' className='social_mail'></img>
    </div>
  );
};

export default Social;
