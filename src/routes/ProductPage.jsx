import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Button from '../components/Button';
import ParagraphHTML from '../components/ParagraphHTML';

const PRODUCTPAGEDATA = gql`
  query Products($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
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

const ProductPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(PRODUCTPAGEDATA, {
    variables: { slug },
  });

  const [mainVisual, setMainVisual] = useState('');

  useEffect(() => {
    if (data) {
      setMainVisual(
        data.products.data[0].attributes.gallery[0].image.data.attributes
          .formats.large.url
      );
    }
  }, [data]);

  const updateMainVisual = (event) => {
    event.preventDefault();
    const nextIndex = event.currentTarget.dataset.imageIndex;
    setMainVisual(
      data.products.data[0].attributes.gallery[nextIndex].image.data.attributes
        .formats.large.url
    );
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='product-page'>
      <div className='visual'>
        <div className='visual__main'>
          <p>céramique</p>
          <div className='visual__main__image'>
            <img src={mainVisual} alt='product' draggable='false' />
          </div>
          <p>contemporaine</p>
        </div>
        <div className='visual__gallery'>
          {data.products.data[0].attributes.gallery.map((visual, index) => (
            <div
              className='visual__gallery__wrapper'
              key={visual.image.data.attributes.formats.large.url}
              data-image-index={index}
              onClick={updateMainVisual}
            >
              <img
                src={visual.image.data.attributes.formats.large.url}
                alt='product'
                draggable='false'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='overview'>
        <h3 className='overview__title'>
          {data.products.data[0].attributes.title}
        </h3>
        <p className='overview__price'>
          € {data.products.data[0].attributes.price}
        </p>
        <p className='overview__weight'>
          {data.products.data[0].attributes.weight} gr
        </p>

        <div className='overview__details'>
          <div>
            <ParagraphHTML
              content={data.products.data[0].attributes.specificationsFR}
            />
          </div>

          <div>
            <ParagraphHTML
              content={data.products.data[0].attributes.specificationsEN}
            />
          </div>
        </div>

        <div className='overview__quality'>
          <p>{data.products.data[0].attributes.descriptionFR}</p>
          <p>{data.products.data[0].attributes.descriptionEN}</p>
        </div>

        <div>
          <Button name='add to cart' theme='dark' size='medium' />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
