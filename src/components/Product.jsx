import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Product = ({ category, title, image, price, id }) => {
  return (
    <div key={id} className='product'>
      <div className='product__visual'>
        <div className='product__visual--image'>
          <img
            src={image}
            className='product__visual--image-item'
            alt='product'
            draggable='false'
          />
        </div>
        <Link
          to={`/shop/${category}/${id}`}
          className='product__visual--button'
        >
          <Button name={'View'} theme='light' size='small' />
        </Link>
      </div>
      <div className='product__details'>
        <h4 className='product__details--title'>{title}</h4>
        <p className='product__details--price'>{price}</p>
      </div>
    </div>
  );
};

export default Product;
