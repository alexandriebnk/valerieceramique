import React from 'react';

const PageNotFound = () => {
  return (
    <div className='page'>
      <p className='page__404'>404</p>
      <div className='page__message'>
        <p className='page__message-text'>This page is not found</p>
        <p className='page__message-link'>
          <a href='/'>GO TO HOME</a>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
