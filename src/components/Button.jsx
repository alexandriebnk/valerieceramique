import React from 'react';

const Button = ({ name, theme, size }) => {
  return (
    <button type='button' className={`button button--${theme} button--${size}`}>
      {name}
    </button>
  );
};

export default Button;
