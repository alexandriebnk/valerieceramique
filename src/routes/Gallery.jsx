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

/*const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery__line gallery__line--first'>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery1}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery2}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery3}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
      </div>
      <div className='gallery__line gallery__line--second'>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery4}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery5}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery6}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
      </div>
      <div className='gallery__line gallery__line--third'>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery7}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery8}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery9}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
      </div>
      <div className='gallery__line gallery__line--fourth'>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery10}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery11}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
        <div className='gallery__line--illustration'>
          <img
            src={Gallery12}
            className='gallery__line--illustration--item'
            alt='gallery-item'
            draggable='false'
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;*/
