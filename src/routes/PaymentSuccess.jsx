import React from 'react';
import UserMessage from '../components/UserMessage';

const PaymentSuccess = () => {
  return (
    <div>
      <UserMessage
        title={'Payment success !'}
        subtitle={'Un mail de confirmation vous a été envoyé'}
        page={'/'}
        message={'Go to home'}
      />
    </div>
  );
};

export default PaymentSuccess;
