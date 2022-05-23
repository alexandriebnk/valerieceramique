import { createContext, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const PRODUCTDATA = gql`
  query Products {
    products {
      data {
        attributes {
          slug
          title
          price
          weight
          gallery {
            image {
              data {
                attributes {
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState(PRODUCTDATA);

  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};
