import React, { useState, useEffect, useContext } from 'react';
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

  const calculateFees = () => {
    let totalWeight = 0;
    cartItems.forEach((product) => {
      totalWeight += product.weight * product.quantity;
    });
    return Math.ceil(feesData * totalWeight);
  };

  const calculateTotal = () => {
    return parseFloat(calculateFees()) + cartSubTotal;
  };

  const onPayment = async () => {
    const products = cartItems.map((product) => {
      return { id: product.slug, quantity: product.quantity };
    });

    const prodURL = 'https://ceramique-vm-back.herokuapp.com';
    const localURL = 'http://localhost:1337';

    try {
      const results = await fetch(
        `${
          process.env.REACT_APP_NODE_ENV === 'production' ? prodURL : localURL
        }/api/payment`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            products,
            total: calculateTotal(),
          }),
        }
      );

      const { status, message, url } = await results.json();

      if (status === 200 && message === 'Checkout ready') {
        window.location.href = url;
      }
    } catch (err) {
      console.log('😡', err);
    }
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
