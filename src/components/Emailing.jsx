import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';

const Emailing = () => {
  const postUrl = `https://gmail.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className='emailing'>
      <div className='emailing__user'>
        <div>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status }) => (
              <CustomForm
                status={status}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Emailing;
