import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Product from './Product';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

import { CartContext } from '../context/cart.context';

const PRODUCTDATA = gql`
  query Product {
    products(sort: "createdAt:desc", pagination: { start: 1, limit: 1000 }) {
      data {
        attributes {
          category {
            data {
              attributes {
                title
              }
            }
          }
          slug
          title
          price
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

const Category = () => {
  const { category } = useParams();
  const { loading, error, data } = useQuery(PRODUCTDATA);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const { descriptionFR, descriptionEN } = useContext(CartContext);

  useEffect(() => {
    if (data) {
      const products = data.products.data.filter((product) => {
        return product.attributes.category.data.attributes.title === category;
      });
      setFilteredProducts(products);
    }
  }, [data, category]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={`/shop/${category}`} />;

  return (
    <div className='category'>
      <div className='category__description'>
        <p>{descriptionFR}</p>
        <p>{descriptionEN}</p>
      </div>
      <h2 className='category__title'>{category}</h2>
      <div className='category__product'>
        {filteredProducts?.map((product) => {
          return (
            <Product
              key={`${product.attributes.title}`}
              category={category}
              title={product.attributes.title}
              gallery={product.attributes.gallery}
              price={product.attributes.price}
              id={product.attributes.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
