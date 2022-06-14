import React, { useState, useEffect, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import Gsap from 'gsap';
import CategoriesList from '../components/CategoriesList';
import ParagraphHTML from '../components/ParagraphHTML';
import ErrorMessage from '../components/ErrorMessage';

import { DescriptionContext } from '../context/description.context';

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
  const { error, data } = useQuery(SHOPDATA);
  const [mainTitle, setMainTitle] = useState(null);
  const [categoriesList, setCategoriesList] = useState(null);
  const [animationEnd, setAnimationEnd] = useState(false);

  const { descriptionFR, descriptionEN, setDescriptionFR, setDescriptionEN } =
    useContext(DescriptionContext);

  useEffect(() => {
    if (data) {
      setDescriptionFR(data.shop.data.attributes.descriptionFR);
      setDescriptionEN(data.shop.data.attributes.descriptionEN);
      setMainTitle(data.shop.data.attributes.title);
      setCategoriesList(data.categories.data);
    }
  }, [data, setDescriptionFR, setDescriptionEN]);

  useEffect(() => {
    // animate loader in
    const tl = new Gsap.timeline({ onComplete: () => setAnimationEnd(true) });
    tl.set('.loader', { opacity: 1 });
    tl.fromTo(
      '.loader__top',
      0.5,
      { opacity: 0, top: '-10rem' },
      { opacity: 1, top: '-2rem' }
    );
    tl.fromTo(
      '.loader__bottom',
      0.5,
      { opacity: 0, top: '10rem' },
      { opacity: 1, top: '2rem' },
      '-=0.5'
    );
  }, []);

  useEffect(() => {
    if (data && animationEnd) {
      // animate loader out
      const tl = new Gsap.timeline();
      tl.fromTo(
        '.loader__top',
        0.5,
        { opacity: 1, top: '-2rem' },
        { opacity: 0, top: '-10rem' }
      );
      tl.fromTo(
        '.loader__bottom',
        0.5,
        { opacity: 1, top: '2rem' },
        { opacity: 0, top: '10rem' },
        '-=0.5'
      );
      tl.fromTo('.loader', 0.5, { opacity: 1 }, { opacity: 0 }, '-=0.25');
    }
  }, [data, animationEnd]);

  if (error) return <ErrorMessage page={'/shop'} />;

  return (
    <div className='shop'>
      <div className='shop__description'>
        {descriptionFR && <ParagraphHTML content={descriptionFR} />}
        {descriptionEN && <ParagraphHTML content={descriptionEN} />}
      </div>
      <h2 className='shop__title'>{mainTitle}</h2>
      <div className='shop__content'>
        <p className='shop__in-progress'>Collections en cours .. </p>
        {/*categoriesList && <CategoriesList list={categoriesList} />*/}
      </div>
    </div>
  );
};

export default Shop;
