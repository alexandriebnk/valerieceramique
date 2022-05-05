import React from 'react';
import ShippingAddress from '../components/ShippingAddress';
import ShoppingList from '../components/ShoppingList';

const CheckoutPage = () => {
  return (
    <div className='checkout'>
      CheckoutPage
      <div className='checkout__route'>
        <div className='checkout__route-shipping'>
          <ShippingAddress />
        </div>
        <div className='checkout__route-list'>
          <ShoppingList />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
