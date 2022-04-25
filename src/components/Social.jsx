import React from 'react';
import Instagram from '../assets/instagram.svg';
import Mail from '../assets/mail.png';

const Social = () => {
  return (
    <div className='social'>
      <img src={Instagram} alt='instagram' className='social__instagram'></img>
      <img src={Mail} alt='mail' className='social__mail'></img>
    </div>
  );
};

export default Social;
