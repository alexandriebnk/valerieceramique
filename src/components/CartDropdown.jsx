import React, { useContext } from 'react';
import BurgerIcon from './ComponentsSVG/BurgerIcon';
import Button from './Button';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';
import CartContext from '../store/cart-context';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className={`dropdown dropdown${isCartOpen ? '--is-open' : ''}`}>
        <div className='dropdown__burger-icon'>
          <BurgerIcon />
        </div>
        <div className='dropdown__title'>Shop Cart</div>

        <div className='cart'>
          <div className='list'>
            <div className='list__article'>
              <div className='list__article__details'>
                <p>Nom de l'objet</p>
                <p>Détails de l'objet</p>
              </div>
              <p className='remove'>Remove</p>
            </div>
            <div className='amount'>
              <p className='amount__price'>50 €</p>
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

          <div className='total'>
            <div className='total__details'>
              <p className='total__details__title'>Subtotal</p>
              <p className='total__details__fees'>Frais de livraison offerts</p>
            </div>
            <p className='total__amount'>50 €</p>
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
