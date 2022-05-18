import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Button from '../components/Button';
import DetailsProd from '../components/DetailsProd';

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

const ProductPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(PRODUCTPAGEDATA, {
    variables: { slug },
  });

  const [mainVisual, setMainVisual] = useState('');

  useEffect(() => {
    if (data) {
      setMainVisual(
        data.products.data[0].attributes.Images[0].Image.data.attributes.formats
          .large.url
      );
    }
  }, [data]);

  const updateMainVisual = (event) => {
    event.preventDefault();
    const nextIndex = event.currentTarget.dataset.imageIndex;
    setMainVisual(
      data.products.data[0].attributes.Images[nextIndex].Image.data.attributes
        .formats.large.url
    );
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='product-page'>
      <div className='product-page__visual'>
        <div className='product-page__visual--block'>
          <div className='product-page__visual--block-anim'>
            <p>céramique</p>
            <div className='product-page__visual--block-big'>
              <img
                src={mainVisual}
                className='product-page__visual--block-big-item'
                alt='product'
                draggable='false'
              />
            </div>
            <p>contemporaine</p>
          </div>
        </div>
        <div className='product-page__visual--gallery'>
          {data.products.data[0].attributes.Images.map((image, index) => (
            <div
              className='product-page__visual--gallery-wrapper'
              key={image.Image.data.attributes.formats.large.url}
              data-image-index={index}
              onClick={updateMainVisual}
            >
              <img
                src={image.Image.data.attributes.formats.large.url}
                className='product-page__visual--gallery-wrapper--item'
                alt='product'
                draggable='false'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='product-page__main'>
        <h2 className='product-page__main--title'>
          {data.products.data[0].attributes.title}
        </h2>
        <p className='product-page__main--price'>
          {data.products.data[0].attributes.price}
        </p>

        <div className='product-page__main--details'>
          <div className='product-page__main--details-first'>
            <DetailsProd
              specifications={data.products.data[0].attributes.specificationsFR}
              titleWeight='weight'
              titleCapacity='capacity'
            />
          </div>

          <div className='product-page__main--details-second'>
            <DetailsProd
              specifications={data.products.data[0].attributes.specificationsEN}
              titleWeight='weight'
              titleCapacity='capacity'
            />
          </div>
        </div>

        <div className='product-page__main--quality'>
          <p className='product-page__main--quality-first'>
            {data.products.data[0].attributes.descriptionFR}
          </p>
          <p className='product-page__main--quality-second'>
            {data.products.data[0].attributes.descriptionEN}
          </p>
        </div>

        <div>
          <Button name='add to cart' theme='dark' size='medium' />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
