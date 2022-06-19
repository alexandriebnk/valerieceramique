import React, { useEffect, useContext, useRef } from 'react';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';
import { CartContext } from '../context/cart.context';

const CartItem = ({ product, title, price, weight, quantity, stock }) => {
  const plusButton = useRef();

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  useEffect(() => {
    if (quantity < stock) {
      plusButton.current.classList.remove('amount__choice__plus--disabled');
    } else {
      plusButton.current.classList.add('amount__choice__plus--disabled');
    }
  }, [quantity, stock]);

  const clearItemHandler = () => clearItemFromCart(product);

  return (
    <div className='item'>
      <div className='item__article'>
        <div className='item__article__details'>
          <p>{title}</p>
          <p>{weight} gr</p>
        </div>
        <p className='remove' onClick={() => clearItemHandler(product)}>
          Remove
        </p>
      </div>
      <div className='amount'>
        <p className='amount__price'>{price * quantity} €</p>
        <div className='amount__choice'>
          <span
            className='amount__choice__minus'
            onClick={() => removeItemFromCart(product)}
          >
            <img
              className='amount__choice__minus__item'
              src={Minus}
              alt='minus'
              draggable='false'
            />
          </span>
          {quantity}

          <span
            className='amount__choice__plus'
            onClick={() => addItemToCart(product)}
            ref={plusButton}
          >
            <img
              className='amount__choice__plus__item'
              src={Plus}
              alt='minus'
              draggable='false'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
