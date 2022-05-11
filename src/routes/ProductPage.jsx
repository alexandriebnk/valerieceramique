import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import DetailsProd from '../components/DetailsProd';
import { products } from '../categories';

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  return (
    <div className='product-page'>
      <div className='product-page__visual'>
        <div className='product-page__visual-wrapper'>
          {product.images.map((src) => (
            <img
              key={src}
              src={src}
              className='product-page__visual-wrapper--item'
              alt='product'
              draggable='false'
            />
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
