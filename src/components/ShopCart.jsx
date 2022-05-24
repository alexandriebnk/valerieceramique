import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';

const ShopCart = ({ title }) => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div
      className={`shop-cart shop-cart${isCartOpen ? '--is-open' : ''}`}
      onClick={toggleOpenCart}
    >
      <p className='shop-cart__title'>{title}</p>
      <p className='shop-cart__number'>({cartItemCount})</p>
    </div>
  );
};

export default ShopCart;
