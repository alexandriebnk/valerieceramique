import React from 'react';
//import Category from './Category';

const categories = ['bowl', 'carafe', 'plat', 'vase', 'glass'];

const CategoryPreview = () => {
  return (
    <div className='preview'>
      <div className='preview__title'>
        <h1>Category</h1>
        <p>See all</p>
      </div>
      <div className='preview__category'>
        {categories.map((category, index) => {
          if (index % 2 !== 0) {
            return (
              <div
                key={`${index}-${category}`}
                className='preview__category--details'
              >
                <p className='preview__category--details-brand preview__category--brand'>
                  Valérie Céramique
                </p>
                <div className='preview__category--details-image'>
                  <img
                    src='/gallery/gallery_2.png'
                    className='preview__category--details-image-item'
                    alt='product'
                    draggable='false'
                  />
                </div>
                <div className='preview__category--details-title'>
                  {category}
                </div>
              </div>
            );
          } else if (index % 2 === 0) {
            return (
              <div
                key={`${index}-${category}`}
                className='preview__category--details'
              >
                <p className='preview__category--details-brand preview__category--brand'>
                  Valérie Céramique
                </p>
                <div className='preview__category--details-image'>
                  <img
                    src='/gallery/gallery_2.png'
                    className='preview__category--details-image-item'
                    alt='product'
                    draggable='false'
                  />
                </div>
                <div className='preview__category--details-title'>
                  {category}
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/*} <Category />*/}
    </div>
  );
};

export default CategoryPreview;
