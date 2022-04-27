import React from 'react';

const BurgerIcon = ({ isOpen }) => {
  return (
    <svg
      className='burger-icon'
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        className={`burger-icon__top burger-icon__top${
          isOpen ? '--cross' : ''
        }`}
        x='1'
        y='16'
        width='22'
        height='1'
        fill='#0E184D'
      />
      <rect
        className={`burger-icon__middle burger-icon__middle${
          isOpen ? '--cross' : ''
        }`}
        x='1'
        y='9'
        width='22'
        height='1'
        fill='#0E184D'
      />
      <rect
        className={`burger-icon__bottom burger-icon__bottom${
          isOpen ? '--cross' : ''
        }`}
        x='1'
        y='2'
        width='22'
        height='1'
        fill='#0E184D'
      />
    </svg>
  );
};

export default BurgerIcon;
