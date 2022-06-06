import React from 'react';

import InstagramIcon from './ComponentsSVG/InstagramIcon';
import MailIcon from './ComponentsSVG/MailIcon';

const Social = ({ instagram, mail }) => {
  return (
    <div className='social'>
      <InstagramIcon instagram={instagram} />
      <MailIcon mail={mail} />
    </div>
  );
};

export default Social;
