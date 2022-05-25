import React from 'react';

const Button = ({ name, theme, size, event }) => {
  return (
    <button
      type='button'
      className={`button button--${theme} button--${size}`}
      onClick={event}
    >
      {name}
    </button>
  );
};

export default Button;
