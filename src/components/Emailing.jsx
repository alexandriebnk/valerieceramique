import React from 'react';
import Button from './Button';

const Emailing = ({ data }) => {
  return (
    <div className='emailing'>
      <input
        className='emailing_input'
        type='email'
        placeholder={data.emailPlaceholder}
      />
      <div>
        <Button name={data.subscribeButton} theme='neutral' size='large' />
      </div>
    </div>
  );
};

export default Emailing;
