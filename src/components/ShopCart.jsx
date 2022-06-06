import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';

const ShopCart = ({ title }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div
      className={`shop-cart shop-cart${isCartOpen ? '--is-open' : ''}`}
      onClick={toggleOpenCart}
    >
      <h4 className='shop-cart__title'>{title}</h4>
      <p className='shop-cart__number'>({cartCount})</p>
    </div>
  );
};

export default ShopCart;
