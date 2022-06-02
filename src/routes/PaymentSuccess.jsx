import React from 'react';
import UserMessage from '../components/UserMessage';

const PaymentSuccess = () => {
  return (
    <div>
      <UserMessage
        title={'Payment success'}
        subtitle={'Thank you !'}
        page={'/'}
        message={'Go to home'}
      />
    </div>
  );
};

export default PaymentSuccess;
