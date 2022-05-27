import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const BurgerIcon = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(CartContext);

  const toggleNavbarIcon = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <svg
      className='burger-icon'
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={toggleNavbarIcon}
    >
      <rect
        className={`burger-icon__top burger-icon__top${
          isNavbarOpen ? '--cross' : ''
        }`}
        x='1'
        y='16'
        width='22'
        height='1'
        fill='#0E184D'
      />
      <rect
        className={`burger-icon__middle burger-icon__middle${
          isNavbarOpen ? '--cross' : ''
        }`}
        x='1'
        y='9'
        width='22'
        height='1'
        fill='#0E184D'
      />
      <rect
        className={`burger-icon__bottom burger-icon__bottom${
          isNavbarOpen ? '--cross' : ''
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
