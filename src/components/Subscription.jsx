import React from 'react';
import Emailing from './Emailing';

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className='subscription__title subscription__text'>
        <p className='subscription__title-fr'>
          Inscrivez-vous afin de recevoir les actualités de l’atelier
        </p>
        <p className='subscription__title-en'>
          Sign up to get the news from the studio
        </p>
      </div>
      <div className='subscription__emailing'>
        <Emailing />
      </div>
      <div className='subscription__privacy subscription__text'>
        <p className='subscription__privacy-fr'>
          Nous respectons votre vie privée
        </p>
        <p className='subscription__privacy-en'>We respect your privacy</p>
      </div>
    </div>
  );
};

export default Subscription;
