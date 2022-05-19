import React from 'react';
import Emailing from '../Emailing/Emailing';

const Subscription = ({ data }) => {
  return (
    <div className='subscription'>
      <div className='subscription__title subscription__text'>
        <p className='subscription__title-fr'>{data.newsletterFR}</p>
        <p className='subscription__title-en'>{data.newsletterEN}</p>
      </div>
      <div className='subscription__emailing'>
        <Emailing data={data} />
      </div>
      <div className='subscription__privacy subscription__text'>
        <p className='subscription__privacy-fr'>{data.privacyFR}</p>
        <p className='subscription__privacy-en'>{data.privacyEN}</p>
      </div>
    </div>
  );
};

export default Subscription;
