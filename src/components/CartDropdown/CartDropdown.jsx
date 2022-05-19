import React, { useContext } from 'react';
import BurgerIcon from '../ComponentsSVG/BurgerIcon/BurgerIcon';
import Button from '../Button/Button';
import Minus from '../../assets/minus.png';
import Plus from '../../assets/plus.png';
import CartContext from '../../store/cart-context';
import classes from './CartDropdown.module.css';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className={isCartOpen ? classes['dropdown-open'] : classes.dropdown}>
        <div className={classes['burger-icon']}>
          <BurgerIcon />
        </div>
        <div className={classes.title}>Shop Cart</div>

        <div className={classes.cart}>
          <div className={classes.list}>
            <div className={classes.article}>
              <div className={classes.details}>
                <p>Nom de l'objet</p>
                <p>Détails de l'objet</p>
              </div>

              <p className={classes.remove}>Remove</p>
            </div>
            <div className={classes.amount}>
              <p className={classes.price}>50 €</p>
              <div className={classes.choice}>
                <span className={classes.minus}>
                  <img
                    className={classes['minus-item']}
                    src={Minus}
                    alt='minus'
                    draggable='false'
                  />
                </span>
                1
                <span className={classes.plus}>
                  <img
                    className={classes['plus-item']}
                    src={Plus}
                    alt='minus'
                    draggable='false'
                  />
                </span>
              </div>
            </div>
          </div>

          <div className={classes.total}>
            <div className={classes.text}>
              <p className={classes['text-title']}>Subtotal</p>
              <p className={classes.fees}>Frais de livraison offerts</p>
            </div>
            <p className={classes['final-amount']}>50 €</p>
          </div>

          <div className={classes.button}>
            <Button name={'payment'} theme='dark' size='medium' />
          </div>
        </div>
      </div>
      <div
        className={isCartOpen ? classes['overlay-open'] : classes.overlay}
        onClick={closeCart}
      ></div>
    </>
  );
};

export default CartDropdown;
