import React, { useRef } from 'react';
import Button from './Button';

const Emailing = ({ data }) => {
  const confirmation = useRef();

  const confirmMessage = () => {
    confirmation.current.style.display = 'block';
  };

  return (
    <div className='emailing'>
      <div className='emailing__user'>
        <input type='email' placeholder={data.emailPlaceholder} required />
        <div>
          <Button
            name={data.subscribeButton}
            theme='neutral'
            size='large'
            event={confirmMessage}
          />
        </div>
      </div>
      <p className='emailing__confirmation' ref={confirmation}>
        Email address recorded !
      </p>
    </div>
  );
};

export default Emailing;
