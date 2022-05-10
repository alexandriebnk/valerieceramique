import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ category, reverse }) => {
  return (
    <div className={`preview${reverse ? ' preview--reverse' : ''}`}>
      <Link to={`/shop/${category.name}`} className='preview__link'>
        <p className='preview__brand'>Valérie Céramique</p>
        <div className='preview__image'>
          <img
            src={category.icon}
            className='preview__image-item'
            alt={category.name}
            draggable='false'
          />
        </div>
        <div className='preview__title'>{category.name}</div>
      </Link>
    </div>
  );
};

export default CategoryPreview;
