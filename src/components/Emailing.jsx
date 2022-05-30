import React, { useRef } from 'react';
import mailchimp from '@mailchimp/mailchimp_marketing';
import Button from './Button';

mailchimp.setConfig({
  apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY,
  server: process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX,
});

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
