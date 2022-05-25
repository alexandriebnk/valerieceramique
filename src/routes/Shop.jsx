import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import CategoriesList from '../components/CategoriesList';

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

  const [descriptionFR, setDescriptionFR] = useState(null);
  const [descriptionEN, setDescriptionEN] = useState(null);
  const [mainTitle, setMainTitle] = useState(null);

  useEffect(() => {
    if (data) {
      setDescriptionFR(data.shop.data.attributes.descriptionFR);
      setDescriptionEN(data.shop.data.attributes.descriptionEN);
      setMainTitle(data.shop.data.attributes.title);
    }
  }, [data]);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

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
