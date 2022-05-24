import React, { useContext } from 'react';
import BurgerIcon from './ComponentsSVG/BurgerIcon';
import CartItem from './CartItem';
import Button from './Button';
import { CartContext } from '../context/cart.context';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
  };
  console.log(cartItems);

  return (
    <>
      <div className={`dropdown dropdown${isCartOpen ? '--is-open' : ''}`}>
        <div className='dropdown__burger-icon'>
          <BurgerIcon />
        </div>
        <h3 className='dropdown__title'>Shop Cart</h3>
        <div className='cart'>
          <div className='cart__item'>
            {cartItems.length ? (
              cartItems.map((cartItem, index) => (
                <div key={`${cartItem}-${index}`}>
                  <CartItem
                    title={cartItem.title}
                    price={cartItem.price}
                    weight={cartItem.weight}
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
              <p className='total__amount__subtotal'>50 €</p>
              <p className='total__amount__fees'>10 €</p>
              <p className='total__amount__final'>60 €</p>
            </div>
          </div>

          <div className='button'>
            <Button name={'payment'} theme='dark' size='medium' />
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
