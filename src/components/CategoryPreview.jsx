import React from 'react';

const CategoryPreview = ({ category, reverse }) => {
  return (
    <div className={`preview${reverse ? ' preview--reverse' : ''}`}>
      <p className='preview__brand'>Valérie Céramique</p>
      <div className='preview__image'>
        <img
          src='/gallery/gallery_2.png'
          className='preview__image-item'
          alt='product'
          draggable='false'
        />
      </div>
      <div className='preview__title'>{category}</div>
    </div>
  );
};

export default CategoryPreview;
