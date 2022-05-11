import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import DescriptionProd from '../components/DescriptionProd';
import { products } from '../categories';

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  return (
    <div className='product-page'>
      <div className='product-page__visual'>
        <img
          src={product.src}
          className='product-page__visual--item'
          alt='product'
          draggable='false'
        />
      </div>

      <div className='product-page__text'>
        <p className='product-page__text--title'>{product.en.title}</p>
        <p className='product-page__text--price'>{product.price}</p>
        <div className='product-page__text--fr'>
          <DescriptionProd
            product={product.fr}
            titleWeight='poids'
            titleCapacity='Contenance'
          />
        </div>
        <div className='product-page__text--fr'>
          <DescriptionProd
            product={product.en}
            titleWeight='weight'
            titleCapacity='capacity'
          />
        </div>

        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
