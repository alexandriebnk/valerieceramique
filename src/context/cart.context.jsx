import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.slug === productToAdd.slug
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.slug === productToAdd.slug
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.slug === productToRemove.slug
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.slug !== productToRemove.slug
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.slug === productToRemove.slug
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.slug !== productToClear.slug);

export const CartContext = createContext({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartSubTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem('shopCart')) {
      setCartItems(JSON.parse(sessionStorage.getItem('shopCart')));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      sessionStorage.setItem('shopCart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length === 0) {
      sessionStorage.removeItem('shopCart');
    }
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems?.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartSubTotal = cartItems?.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartSubTotal(newCartSubTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeCartItem(cartItems, productToRemove));

  const clearItemFromCart = (productToClear) =>
    setCartItems(clearCartItem(cartItems, productToClear));

  const value = {
    isNavbarOpen,
    setIsNavbarOpen,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartSubTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
