import { createContext, useState } from 'react';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState();

  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};
