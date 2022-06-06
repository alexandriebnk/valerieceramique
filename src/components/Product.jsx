import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { CartContext } from '../context/cart.context';

const Product = ({ category, title, gallery, price, id }) => {
  const { scrollTop } = useContext(CartContext);
  const firstImage = gallery[0].image.data.attributes.formats.small.url;

  return (
    <div key={id} className='product'>
      <div className='product__visual'>
        <div className='product__visual__image'>
          <img src={firstImage} alt='product' draggable='false' />
        </div>
        <Link
          to={`/shop/${category}/${id}`}
          onClick={scrollTop}
          className='product__visual__button'
        >
          <Button name={'View'} theme='light' size='small' />
        </Link>
      </div>
      <div className='product__details'>
        <h4 className='product__details__title'>{title}</h4>
        <p className='product__details__price'>€ {price}</p>
      </div>
    </div>
  );
};

export default Product;
