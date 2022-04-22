import React from 'react';
import Button from './Button';

const Emailing = () => {
  return (
    <div className='emailing'>
      <input
        className='emailing_input'
        type='email'
        placeholder='Email Address'
      />
      <Button />
    </div>
  );
};

export default Emailing;
