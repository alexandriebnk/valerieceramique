import React from 'react';
import CategoryPreview from './CategoryPreview';
import { categories } from '../categories';

const CategoriesList = () => {
  return (
    <div className='list'>
      <div className='list__title'>
        <h1>Categories</h1>
      </div>
      <div className='list__categories'>
        <ul className='list__categories--left'>
          {categories.map((category, index) => {
            if (index % 2 === 0) {
              return (
                <li
                  className='list__categories--left-category'
                  key={`${category}-${index}`}
                >
                  <CategoryPreview category={category} />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul className='list__categories--right'>
          {categories.map((category, index) => {
            if (index % 2 !== 0) {
              return (
                <li
                  className='list__categories--right-category'
                  key={`${category}-${index}`}
                >
                  <CategoryPreview
                    category={category}
                    key={`${category}-${index}`}
                    reverse
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
