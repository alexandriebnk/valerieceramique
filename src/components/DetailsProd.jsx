import React from 'react';

const DetailsProd = ({ product }) => {
  return (
    <>
      <p className='details__title'>{product.title}</p>
      <p className='details__details'>{product.details}</p>
      <p className='details__material'>{product.material}</p>
      <p className='details__design'>{product.design}</p>
      <p className='details__dimensions'>
        Dimensions : Ø {product.dimensions.diameter} / h.{' '}
        {product.dimensions.height}
      </p>
      <p className='details__weight'>Poids : {product.weight}</p>
      <p className='details__capacity'>Contenance : {product.capacity}</p>
    </>
  );
};

export default DetailsProd;
