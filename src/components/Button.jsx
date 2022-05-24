import React from 'react';

const Button = ({ name, theme, size, event }) => {
  return (
    <button
      onClick={event}
      type='button'
      className={`button button--${theme} button--${size}`}
    >
      {name}
    </button>
  );
};

export default Button;
