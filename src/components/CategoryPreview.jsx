import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ category, reverse }) => {
  const title = category.attributes.title;
  const visual = category.attributes.visual.data.attributes.formats.large.url;
  return (
    <Link
      to={`/shop/${title}`}
      className={`preview${reverse ? ' preview--reverse' : ''}`}
    >
      <p className='preview__brand'>Valérie Mourigeau</p>
      <div className='preview__image'>
        <img
          src={visual}
          className='preview__image-item'
          alt={title}
          draggable='false'
        />
      </div>
      <div className='preview__title'>{title}</div>
    </Link>
  );
};

export default CategoryPreview;
