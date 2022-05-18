import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Product from './Product';

const PRODUCTDATA = gql`
  query Product {
    products {
      data {
        attributes {
          slug
          title
          price
          weight
          specificationsFR
          specificationsEN
          descriptionFR
          descriptionEN
          Images {
            Image {
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

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='category'>
      <h1 className='category__title'>{category}</h1>
      {data.products.data.map((product, index) => {
        return (
          <div key={`${product}-${index}`} className='category__product'>
            <Product
              category={category}
              title={product.attributes.title}
              images={product.attributes.Images}
              price={product.attributes.price}
              id={product.attributes.slug}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
