import React, { useState } from 'react';
import CartDropdown from './CartDropdown';

const ShopCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`shop-cart shop-cart${isOpen ? '--is-open' : ''}`}
      onClick={toggleOpenCart}
    >
      {isOpen && <CartDropdown />}
      <p className='shop-cart__title'>Shop Cart</p>
      <p className='shop-cart__number'>(0)</p>
    </div>
  );
};

export default ShopCart;
