import React, { useContext } from 'react';
import CartContext from '../store/cart-context';

const ShopCart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div
      className={`shop-cart shop-cart${isCartOpen ? '--is-open' : ''}`}
      onClick={toggleOpenCart}
    >
      <p className='shop-cart__title'>Shop Cart</p>
      <p className='shop-cart__number'>(0)</p>
    </div>
  );
};

export default ShopCart;
