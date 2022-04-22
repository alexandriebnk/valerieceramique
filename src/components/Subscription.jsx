import React from 'react';
import Emailing from './Emailing';

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className='subscription_title'>
        <p className='subscription_title_fr'>
          Inscrivez-vous afin de recevoir les actualités de l’atelier
        </p>
        <p className='subscription_title_en'>
          Sign up to get the news from the studio
        </p>
      </div>
      <div className='subscription_emailing'>
        <Emailing />
      </div>
      <div className='subscription_privacy'>
        <p className='subscription_privacy_fr'>
          Nous respectons votre vie privée
        </p>
        <p className='subscription_privacy_en'>We respect your privacy</p>
      </div>
    </div>
  );
};

export default Subscription;
