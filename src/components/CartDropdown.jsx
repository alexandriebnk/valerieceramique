import React, { useContext } from 'react';
import BurgerIcon from './ComponentsSVG/BurgerIcon';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';
import CartContext from '../store/cart-context';

const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className='dropdown'>
        <div className='dropdown__burger-icon'>
          <BurgerIcon />
        </div>

        <div className='dropdown__cart'>
          <div className='dropdown__cart--list'>
            <div className='dropdown__cart--list-article'>
              <div className='dropdown__cart--list-article-details'>
                <p>Nom de l'objet</p>
                <p>Détails de l'objet</p>
              </div>

              <p className='dropdown__cart--list-article-details-remove'>
                Remove
              </p>
            </div>
            <div className='dropdown__cart--list-amount'>
              <p className='dropdown__cart--list-amount-price'>50 €</p>
              <div className='dropdown__cart--list-amount-choice'>
                <span className='dropdown__cart--list-amount-choice-minus'>
                  <img
                    className='dropdown__cart--list-amount-choice-minus-item'
                    src={Minus}
                    alt='minus'
                    draggable='false'
                  />
                </span>
                1
                <span className='dropdown__cart--list-amount-choice-plus'>
                  <img
                    className='dropdown__cart--list-amount-choice-plus-item'
                    src={Plus}
                    alt='minus'
                    draggable='false'
                  />
                </span>
              </div>
            </div>
          </div>

          <div className='dropdown__cart--total'>
            <div className='dropdown__cart--total-text'>
              <p className='dropdown__cart--total-text-title'>Subtotal</p>
              <p className='dropdown__cart--total-text-fees'>
                Frais de livraison offerts
              </p>
            </div>
            <p className='dropdown__cart--total-amount'>50 €</p>
          </div>

          <button type='button' className='dropdown__cart--button'>
            Payment
          </button>
        </div>
      </div>
      <div className='overlay' onClick={closeCart}></div>
    </>
  );
};

export default CartDropdown;
