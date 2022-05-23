import React from 'react';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';

const CartItem = ({ name, price, weight }) => {
  return (
    <div className='item'>
      <div className='item__article'>
        <div className='item__article__details'>
          <p>{name}</p>
          <p>{weight}</p>
        </div>
        <p className='remove'>Remove</p>
      </div>
      <div className='amount'>
        <p className='amount__price'>{price} €</p>
        <div className='amount__choice'>
          <span className='amount__choice__minus'>
            <img
              className='amount__choice__minus__item'
              src={Minus}
              alt='minus'
              draggable='false'
            />
          </span>
          1
          <span className='amount__choice__plus'>
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
