import React from 'react';

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

const Gallery = () => {
  return (
    <div className='gallery'>
      {images.map((image) => {
        return (
          <div key={image} className='gallery__image'>
            <img src={image} alt='gallery-item' draggable='false' />
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
