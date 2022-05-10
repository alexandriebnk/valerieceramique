import React, { useContext } from 'react';
import CategoryPreview from './CategoryPreview';
import CategoriesContext from '../store/categories-context';

const CategoriesList = () => {
  const category = useContext(CategoriesContext);
  const arrayCategory = Object.values(category);

  return (
    <div className='list'>
      <div className='list__title'>
        <h1>Categories</h1>
      </div>
      <div className='list__categories'>
        <ul className='list__categories--left'>
          {arrayCategory.map((category, index) => {
            if (index % 2 === 0) {
              return (
                <li>
                  <CategoryPreview
                    category={category}
                    key={`${category}-${index}`}
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul className='list__categories--right'>
          {arrayCategory.map((category, index) => {
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
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
