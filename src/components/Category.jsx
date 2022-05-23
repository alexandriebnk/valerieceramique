import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Product from './Product';

const PRODUCTDATA = gql`
  query Products {
    products {
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
          weight
          specificationsFR
          specificationsEN
          descriptionFR
          descriptionEN
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

  useEffect(() => {
    if (data) {
      const products = data.products.data.filter((product) => {
        return product.attributes.category.data.attributes.title === category;
      });
      setFilteredProducts(products);
    }
  }, [data, category]);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='category'>
      <h2 className='category__title'>{category}</h2>
      <div className='category__product'>
        {filteredProducts?.map((product) => {
          return (
            <Product
              key={`${product}`}
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
