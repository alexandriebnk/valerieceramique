import React, { useState, useEffect, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import CategoriesList from '../components/CategoriesList';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

import { CartContext } from '../context/cart.context';

const SHOPDATA = gql`
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
  const { loading, error, data } = useQuery(SHOPDATA);
  const [mainTitle, setMainTitle] = useState(null);

  const { descriptionFR, descriptionEN, setDescriptionFR, setDescriptionEN } =
    useContext(CartContext);

  useEffect(() => {
    if (data) {
      setDescriptionFR(data.shop.data.attributes.descriptionFR);
      setDescriptionEN(data.shop.data.attributes.descriptionEN);
      setMainTitle(data.shop.data.attributes.title);
    }
  }, [data, setDescriptionFR, setDescriptionEN]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={'/shop'} />;

  return (
    <div className='shop'>
      <div className='shop__description'>
        <p>{descriptionFR}</p>
        <p>{descriptionEN}</p>
      </div>
      <h2 className='shop__title'>{mainTitle}</h2>
      <div className='shop__content'>
        <CategoriesList />
      </div>
    </div>
  );
};

export default Shop;
