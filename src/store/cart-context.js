import { createContext } from 'react';

const CartContext = createContext({
  products: [],
  subTotal: 0,
  totalWeight: 0,
  pricePerGram: 0.5,
  shipmentTotal: 0,
  total: 0,
  calculateTotal: () => {},
});

const CartProvider = () => {};

export default CartContext;
