import React from 'react';
import Product from './Product';

const images = [
  '/gallery/gallery_1.png',
  '/gallery/gallery_2.png',
  '/gallery/gallery_3.png',
  '/gallery/gallery_4.png',
  '/gallery/gallery_5.png',
  '/gallery/gallery_6.png',
  '/gallery/gallery_7.png',
  '/gallery/gallery_8.png',
  '/gallery/gallery_9.png',
  '/gallery/gallery_10.png',
  '/gallery/gallery_11.png',
  '/gallery/gallery_12.png',
];

const Category = () => {
  return (
    <div className='category'>
      {images.map((image) => {
        return (
          <div key={image} className='category__product'>
            <Product
              title={image.title}
              img={image}
              price={image.price}
              id={image.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
