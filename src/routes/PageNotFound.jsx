import React from 'react';

import UserMessage from '../components/UserMessage';

const PageNotFound = () => {
  return (
    <>
      <UserMessage
        title={'404'}
        subtitle={'Page not found !'}
        page={'/'}
        message={'Go to home'}
      />
    </>
  );
};

export default PageNotFound;
