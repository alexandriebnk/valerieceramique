import React, { useState, useEffect, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import CategoriesList from '../components/CategoriesList';
import ParagraphHTML from '../components/ParagraphHTML';
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
    categories(sort: "createdAt:desc", pagination: { start: 1, limit: 1000 }) {
      data {
        attributes {
          title
          visual {
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
`;

const Shop = () => {
  const { loading, error, data } = useQuery(SHOPDATA);
  const [mainTitle, setMainTitle] = useState(null);
  const [categoriesList, setCategoriesList] = useState(null);

  const { descriptionFR, descriptionEN, setDescriptionFR, setDescriptionEN } =
    useContext(CartContext);

  useEffect(() => {
    if (data) {
      setDescriptionFR(data.shop.data.attributes.descriptionFR);
      setDescriptionEN(data.shop.data.attributes.descriptionEN);
      setMainTitle(data.shop.data.attributes.title);
      setCategoriesList(data.categories.data);
    }
  }, [data, setDescriptionFR, setDescriptionEN]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={'/shop'} />;

  return (
    <div className='shop'>
      <div className='shop__description'>
        {descriptionFR && <ParagraphHTML content={descriptionFR} />}
        {descriptionEN && <ParagraphHTML content={descriptionEN} />}
      </div>
      <h2 className='shop__title'>{mainTitle}</h2>
      <div className='shop__content'>
        {categoriesList && <CategoriesList list={categoriesList} />}
      </div>
    </div>
  );
};

export default Shop;
