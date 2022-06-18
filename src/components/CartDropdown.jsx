import React, { useContext } from 'react';
import ClosingIcon from './ComponentsSVG/ClosingIcon';
import CartItem from './CartItem';
import Button from './Button';

import { CartContext } from '../context/cart.context';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartSubTotal } =
    useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const calculateFees = () => {
    let totalWeight = 0;
    let fees = 0;

    cartItems.forEach((product) => {
      totalWeight += product.weight * product.quantity;
    });

    if (cartItems.length === 0) {
      fees = 0;
    } else if (totalWeight === 0) {
      fees = 0;
    } else if (totalWeight <= 250) {
      fees = 4.95;
    } else if (totalWeight > 250 && totalWeight <= 500) {
      fees = 6.55;
    } else if (totalWeight > 500 && totalWeight <= 750) {
      fees = 7.45;
    } else if (totalWeight > 750 && totalWeight <= 1000) {
      fees = 8.1;
    } else if (totalWeight > 1000 && totalWeight <= 2000) {
      fees = 9.35;
    } else if (totalWeight > 2000 && totalWeight <= 5000) {
      fees = 14.35;
    } else if (totalWeight > 5000) {
      fees = 20.85;
    }

    return Math.ceil(fees);
  };

  const calculateTotal = () => {
    return parseFloat(calculateFees()) + cartSubTotal;
  };

  const onPayment = async () => {
    const products = cartItems.map((product) => {
      return { id: product.slug, quantity: product.quantity };
    });

    const backendEndpoint = 'https://murmuring-sea-64341.herokuapp.com';

    try {
      const results = await fetch(`${backendEndpoint}/api/payment`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          products,
          total: calculateTotal(),
        }),
      });
      const { status, message, url } = await results.json();
      if (status === 200 && message === 'Checkout ready') {
        window.location.href = url;
      }
    } catch (err) {
      console.log('😡', err);
    }
  };

  return (
    <>
      <div className={`dropdown dropdown${isCartOpen ? '--is-open' : ''}`}>
        <div className='dropdown__closing-icon'>
          <ClosingIcon />
        </div>
        <h3 className='dropdown__title'>Shop Cart</h3>
        <div className='cart'>
          <div className='cart__item'>
            {cartItems.length ? (
              cartItems.map((cartItem, index) => (
                <div key={`${cartItem}-${index}`}>
                  <CartItem
                    product={cartItem}
                    title={cartItem.title}
                    price={cartItem.price}
                    weight={cartItem.weight}
                    quantity={cartItem.quantity}
                  />
                </div>
              ))
            ) : (
              <span className='empty'>Your cart is empty</span>
            )}
          </div>
          <div className='total'>
            <div className='total__details'>
              <p className='total__details__title'>Subtotal</p>
              <p className='total__details__fees'>Frais de livraison</p>
              <p className='total__details__final'>Total</p>
            </div>
            <div className='total__amount'>
              <p className='total__amount__subtotal'>{cartSubTotal} €</p>
              <p className='total__amount__fees'>{calculateFees()} €</p>
              <p className='total__amount__final'>{calculateTotal()} €</p>
            </div>
          </div>
          <div className='button'>
            {cartItems.length > 0 && (
              <Button
                name={'payment'}
                theme='dark'
                size='medium'
                event={onPayment}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`overlay overlay${isCartOpen ? '--is-open' : ''}`}
        onClick={closeCart}
      ></div>
    </>
  );
};
export default CartDropdown;
