import React from 'react';
import Category from './Category';

const CategoryPreview = () => {
  return (
    <div className='preview'>
      <div className='preview__title'>
        <h1>Category</h1>
        <p>See all</p>
      </div>
      <div className='preview__category'>
        <div className='preview__category--details'>
          <p className='preview__category--details-brand'>Valérie Céramique</p>
          <div className='preview__category--details-image'>
            <img
              src='/gallery/gallery_1.png'
              className='preview__category--details-image-item'
              alt='product'
              draggable='false'
            />
          </div>
          <div className='preview__category--details-title'></div>
        </div>
      </div>

      <Category />
    </div>
  );
};

export default CategoryPreview;
