import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { products } from '../categories';

const Category = () => {
  const { category } = useParams();

  return (
    <div className='category'>
      <h1 className='category__title'>{category}</h1>

      {products.map((product, index) => {
        return (
          <div key={`${product}-${index}`} className='category__product'>
            <Product
              category={category}
              title={product.title.en}
              img={product.src}
              price={product.price}
              id={product.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
