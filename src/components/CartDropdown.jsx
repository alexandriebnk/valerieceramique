import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import BurgerIcon from './ComponentsSVG/BurgerIcon';
import CartItem from './CartItem';
import Button from './Button';
import { CartContext } from '../context/cart.context';

const FRAISDELIVRAISONDATA = gql`
  query FraisDeLivraison {
    fraisDeLivraison {
      data {
        attributes {
          frais
        }
      }
    }
  }
`;

const CartDropdown = () => {
  const { loading, error, data } = useQuery(FRAISDELIVRAISONDATA);
  const { isCartOpen, setIsCartOpen, cartItems, cartSubTotal } =
    useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const calculateFees = () =>
    (data.fraisDeLivraison.data.attributes.frais * cartSubTotal).toFixed(2);

  const calculateTotal = () => {
    return parseFloat(calculateFees()) + cartSubTotal;
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

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
