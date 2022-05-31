import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ClosingIcon from './ComponentsSVG/ClosingIcon';
import CartItem from './CartItem';
import Button from './Button';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
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
  const [feesData, setFeesData] = useState(null);

  useEffect(() => {
    if (data) setFeesData(data.fraisDeLivraison.data.attributes.frais);
  }, [data]);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const calculateFees = () => (feesData * cartSubTotal).toFixed(2);

  const calculateTotal = () => {
    return parseFloat(calculateFees()) + cartSubTotal;
  };

  const onPayment = async () => {
    const results = await fetch('http://localhost:1337/api/payment', {
      method: 'POST',
      body: JSON.stringify({
        products: [
          { id: 'plat-flower-white', quantity: 2 },
          { id: 'flower-glass-beige', quantity: 3 },
        ],
        amount: calculateTotal(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await results.json();
    console.log(data);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={'/'} />;

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
            <Link to='/checkout'>
              <Button
                name={'payment'}
                theme='dark'
                size='medium'
                event={onPayment}
              />
            </Link>
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
