import React from 'react';
import UserMessage from '../components/UserMessage';

const PageNotFound = () => {
  return (
    <div>
      <UserMessage title={'404'} subtitle={'Page not found !'} />
    </div>
  );
};

export default PageNotFound;
