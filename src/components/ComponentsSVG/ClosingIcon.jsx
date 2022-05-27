import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ClosingIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIconCart = () => {
    setIsCartOpen(false);
  };
  return (
    <svg
      className={`closing-icon closing-icon${isCartOpen ? '--is-open' : ''}`}
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='50'
      height='50'
      viewBox='0 0 50 50'
      onClick={toggleIconCart}
    >
      <path
        fill='currentColor'
        d='M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z'
      ></path>
    </svg>
  );
};

export default ClosingIcon;
