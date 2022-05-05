import React from 'react';
import CategoryPreview from './CategoryPreview';

const categories = ['Bowls', 'Carafes', 'Plats', 'Vases', 'Glasses'];

const CategoriesList = () => {
  return (
    <div className='list'>
      <div className='list__title'>
        <h1>Categories</h1>
      </div>
      <div className='list__categories'>
        <div className='list__categories--left'>
          {categories.map((category, index) => {
            if (index % 2 === 0) {
              return (
                <CategoryPreview
                  category={category}
                  key={`${category}-${index}`}
                />
              );
            }
            return null;
          })}
        </div>
        <div className='list__categories--right'>
          {categories.map((category, index) => {
            if (index % 2 !== 0) {
              return (
                <CategoryPreview
                  category={category}
                  key={`${category}-${index}`}
                  reverse
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
