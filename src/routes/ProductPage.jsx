import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import DetailsProd from '../components/DetailsProd';
import { products } from '../categories';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const [mainVisual, setMainVisual] = useState(product.images[0]);

  const updateMainVisual = (event) => {
    event.preventDefault();
    const nextIndex = event.currentTarget.dataset.imageIndex;
    setMainVisual(product.images[nextIndex]);
  };

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
          {product.images.map((src, index) => (
            <div
              className='product-page__visual--gallery-wrapper'
              key={src}
              data-image-index={index}
              onClick={updateMainVisual}
            >
              <img
                src={src}
                className='product-page__visual--gallery-wrapper--item'
                alt='product'
                draggable='false'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='product-page__main'>
        <h2 className='product-page__main--title'>{product.title}</h2>
        <p className='product-page__main--price'>{product.price}</p>

        <div className='product-page__main--details'>
          <div className='product-page__main--details-first'>
            <DetailsProd
              product={product}
              titleWeight='weight'
              titleCapacity='capacity'
            />
          </div>

          <div className='product-page__main--details-second'>
            <DetailsProd
              product={product}
              titleWeight='weight'
              titleCapacity='capacity'
            />
          </div>
        </div>

        <div className='product-page__main--quality'>
          <p className='product-page__main--quality-first'>
            {product.description}
          </p>
          <p className='product-page__main--quality-second'>
            {product.description}
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
