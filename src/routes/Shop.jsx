import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CategoriesList from '../components/CategoriesList';

const ABOUTDATA = gql`
  query Shop {
    shop {
      data {
        attributes {
          descriptionFR
          descriptionEN
          title
        }
      }
    }
  }
`;

const Shop = () => {
  const { loading, error, data } = useQuery(ABOUTDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  const descriptionFR = data.shop.data.attributes.descriptionFR;
  const descriptionEN = data.shop.data.attributes.descriptionEN;
  const title = data.shop.data.attributes.title;

  return (
    <div className='shop'>
      <div className='shop__description'>
        <p className='shop__description--fr'>{descriptionFR}</p>
        <p className='shop__description--en'>{descriptionEN}</p>
      </div>
      <p>{title}</p>
      <div className='shop__content'>
        <CategoriesList />
      </div>
    </div>
  );
};

export default Shop;
