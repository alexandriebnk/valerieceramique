import React from 'react';

const ShopCart = (props) => {
  return (
    <div className='shop-cart'>
      <p className='shop-cart_title'>Shop Cart</p>
      <p className='shop-cart_number'>(${props.number})</p>
    </div>
  );
};

export default ShopCart;
