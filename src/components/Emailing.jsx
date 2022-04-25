import React from 'react';
import SubmitButton from './SubmitButton';

const Emailing = () => {
  return (
    <div className='emailing'>
      <input
        className='emailing_input'
        type='email'
        placeholder='Email Address'
      />
      <div className='emailing_button'>
        <SubmitButton />
      </div>
    </div>
  );
};

export default Emailing;
