import React, { useContext } from 'react';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';
import { CartContext } from '../context/cart.context';

const CartItem = ({ product, title, price, weight, quantity }) => {
  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    productStock,
    isAddButtonRemoved,
    setIsAddButtonRemoved,
  } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(product);

  const activateAddButton = () => {
    removeItemFromCart(product);
    if (quantity > 0 && quantity <= productStock) {
      setIsAddButtonRemoved(false);
    }
  };

  const desactivateAddButton = () => {
    addItemToCart(product);
    if (quantity >= productStock - 1) {
      setIsAddButtonRemoved(true);
    }
  };

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
          {isAddButtonRemoved === true && (
            <span
              className='amount__choice__minus'
              onClick={() => activateAddButton()}
            >
              <img
                className='amount__choice__minus__item'
                src={Minus}
                alt='minus'
                draggable='false'
              />
            </span>
          )}
          {quantity}

          {isAddButtonRemoved === false && (
            <span
              className='amount__choice__plus'
              onClick={() => desactivateAddButton()}
            >
              <img
                className='amount__choice__plus__item'
                src={Plus}
                alt='minus'
                draggable='false'
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
