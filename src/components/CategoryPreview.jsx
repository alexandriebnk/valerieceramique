import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ category, reverse }) => {
  return (
    <Link
      to={`/shop/${category.name}`}
      className={`preview${reverse ? ' preview--reverse' : ''}`}
    >
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
  );
};

export default CategoryPreview;
