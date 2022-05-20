import React from 'react';
import Emailing from './Emailing';

const Subscription = ({ data }) => {
  return (
    <div className='subscription'>
      <div className='subscription__title subscription__text'>
        <p>{data.newsletterFR}</p>
        <p>{data.newsletterEN}</p>
      </div>
      <div className='subscription__emailing'>
        <Emailing data={data} />
      </div>
      <div className='subscription__privacy subscription__text'>
        <p>{data.privacyFR}</p>
        <p>{data.privacyEN}</p>
      </div>
    </div>
  );
};

export default Subscription;
