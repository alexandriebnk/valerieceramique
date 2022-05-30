import React from 'react';
import UserMessage from '../components/UserMessage';

const ErrorMessage = ({ page }) => {
  return (
    <div className='error-message'>
      <UserMessage
        title={'Oups !'}
        subtitle={'Refresh Page !'}
        page={page}
        message={'Refresh'}
      />
    </div>
  );
};

export default ErrorMessage;
