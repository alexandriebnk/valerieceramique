import React from 'react';

const PageNotFound = () => {
  return (
    <div className='page'>
      <p className='page_404'>404</p>
      <div className='page_message'>
        <p className='page_message_text'>This page is not found</p>
        <p className='page_message_link'>
          <a href='/'>GO TO HOME</a>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
