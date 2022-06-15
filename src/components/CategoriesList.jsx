import React from 'react';

import CategoryPreview from './CategoryPreview';

const CategoriesList = ({ list }) => {
  return (
    <div className='list'>
      {list.length < 1 && (
        <div className='list__empty'>Collections en cours ...</div>
      )}
      {list.length > 0 && (
        <div className='categories'>
          <ul className='categories__left'>
            {list.map((category, index) => {
              if (index % 2 === 0) {
                return (
                  <li
                    className='categories__left__category'
                    key={`${category}-${index}`}
                  >
                    <CategoryPreview category={category} />
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <ul className='categories__right'>
            {list.map((category, index) => {
              if (index % 2 !== 0) {
                return (
                  <li
                    className='categories__right__category'
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
      )}
    </div>
  );
};

export default CategoriesList;
