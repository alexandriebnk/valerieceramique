import React from 'react';
import Button from './Button';

const Product = ({ title, image, price, id }) => {
  return (
    <div key={id} className='product'>
      <div className='product__visual'>
        <div className='product__visual--image'>
          <img
            src='/gallery/gallery_1.png'
            className='product__visual--image-item'
            alt='product'
            draggable='false'
          />
        </div>
        <div className='product__visual--button'>
          <Button />
        </div>
      </div>
      <div className='product__details'>
        <h4 className='product__details--title'>Small flower cup, white</h4>
        <p className='product__details--price'>€30.00</p>
      </div>
    </div>
  );
};

export default Product;
