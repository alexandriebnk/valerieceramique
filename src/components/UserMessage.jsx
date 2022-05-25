import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Brush from '../assets/brush.svg';

const UserMessage = ({ title, subtitle }) => {
  return (
    <div className='message'>
      <div
        className='message__brush'
        style={{ backgroundImage: `url(${Brush})` }}
      >
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <Link to='/' className='message__redirection'>
        <Button name={'Go to home'} theme='dark' size='medium' />
      </Link>
    </div>
  );
};

export default UserMessage;
