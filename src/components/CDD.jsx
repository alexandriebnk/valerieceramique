import React, { useContext } from 'react';
import ClosingIcon from './ComponentsSVG/ClosingIcon';
import CartItem from './CartItem';
import Button from './Button';
import { CartContext } from '../context/cart.context';

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartSubTotal } =
    useContext(CartContext);
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const calculateTotalWeight = () => {
    let results = [];
    cartItems.forEach((product) => {
      results.push(product.weight * product.quantity);
    });
    if (cartItems.length === 0) {
      return 0;
    } else if (results === 0) {
      return 0;
    } else if (results <= 250) {
      return 4.95;
    } else if (results > 250 && results <= 500) {
      return 6.55;
    } else if (results > 500 && results <= 750) {
      return 7.45;
    } else if (results > 750 && results <= 1000) {
      return 8.1;
    } else if (results > 1000 && results <= 2000) {
      return 9.35;
    } else if (results > 2000 && results <= 5000) {
      return 14.35;
    } else if (results > 5000) {
      return 20.85;
    }
  };

  const calculateTotalPayment = () => {
    return calculateTotalWeight() + cartSubTotal;
  };

  const onPayment = async () => {
    const products = cartItems.map((product) => {
      return { id: product.slug, quantity: product.quantity };
    });

    const backendEndpoint = 'https://murmuring-sea-64341.herokuapp.com';

    try {
      const results = await fetch(`${backendEndpoint}/api/payment`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          products,
          total: calculateTotalPayment(),
        }),
      });

      const { status, message, url } = await results.json();

      if (status === 200 && message === 'Checkout ready') {
        window.location.href = url;
      }
    } catch (err) {
      console.log(err);
    }
  };

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
              <p className='total__amount__fees'>{calculateTotalWeight()} €</p>
              <p className='total__amount__final'>
                {calculateTotalPayment()} €
              </p>
              {/*<p className='total__amount__fees'>{calculateFees()} €</p>
              <p className='total__amount__final'>{calculateTotal()} €</p>*/}
            </div>
          </div>

          <div className='button'>
            {cartItems.length > 0 && isCartOpen && (
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

////////////////////////
///BACKEND
////////////////////////

('use strict');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * payment service.
 */

module.exports = {
  getProducts: async (products) => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        'api::product.product',
        {
          fields: ['slug', 'title', 'price', 'weight'],
        }
      );

      // reduce the data to the format we want to return
      let entriesReduced;

      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          acc.push({
            id: item.slug,
            title: item.title,
            price: item.price,
            weight: item.weight,
          });
          return acc;
        }, []);
      }
      const filteredProducts = [];
      products.forEach((product) => {
        entriesReduced.forEach((entry) => {
          if (entry.id === product.id) {
            filteredProducts.push({ quantity: product.quantity, ...entry });
          }
        });
      });
      // return the reduced data
      return filteredProducts;
    } catch (err) {
      return err;
    }
  },
  calculateTotal: async (products) => {
    let subTotal = 0;
    let totalWeight = 0;
    let fees = 0;
    let total = 0;

    try {
      products.forEach((product) => {
        subTotal += product.price * product.quantity;
      });

      products.forEach((product) => {
        totalWeight += product.weight * product.quantity;
      });

      if (products.length === 0) {
        fees = 0;
      } else if (totalWeight === 0) {
        fees = 0;
      } else if (totalWeight <= 250) {
        fees = 4.95;
      } else if (totalWeight > 250 && totalWeight <= 500) {
        fees = 6.55;
      } else if (totalWeight > 500 && totalWeight <= 750) {
        fees = 7.45;
      } else if (totalWeight > 750 && totalWeight <= 1000) {
        fees = 8.1;
      } else if (totalWeight > 1000 && totalWeight <= 2000) {
        fees = 9.35;
      } else if (totalWeight > 2000 && totalWeight <= 5000) {
        fees = 14.35;
      } else if (totalWeight > 5000) {
        fees = 20.85;
      }

      console.log(total, fees);

      //return { strapiTotal: total, strapiFees: fees };
    } catch (err) {
      return err;
    }
  },
  createStripeSession: async (strapiProducts, strapiFees) => {
    try {
      const baseUrl =
        process.env.NODE_ENV === 'production'
          ? process.env.APP_URL
          : 'http://localhost:3000';
      const success_url = `${baseUrl}/payment-success`;
      const cancel_url = baseUrl;

      const line_items = await Promise.all(
        strapiProducts.map(async (item) => {
          const price = await stripe.prices.create({
            unit_amount: item.price * 100,
            currency: 'eur',
            product_data: {
              name: item.id,
            },
          });

          return {
            price: price.id,
            quantity: item.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url,
        cancel_url,
        shipping_address_collection: {
          allowed_countries: ['FR'],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: Math.ceil(strapiFees) * 100,
                currency: 'eur',
              },
              display_name: 'Livraison à domicile',
              // Delivers between 5-7 business days
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
        ],
      });

      return session.url;
    } catch (error) {
      return error;
    }
  },
};
