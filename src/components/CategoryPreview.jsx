import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.context';

const CategoryPreview = ({ category, reverse }) => {
  const { scrollTop } = useContext(CartContext);

  const title = category.attributes.title;
  const visual = category.attributes.visual.data.attributes.formats.large.url;

  return (
    <Link
      to={`/shop/${title}`}
      onClick={scrollTop}
      className={`preview${reverse ? ' preview--reverse' : ''}`}
    >
      <p className='preview__brand'>Valérie Mourigeau</p>
      <div className='preview__image'>
        <img src={visual} alt={title} draggable='false' />
      </div>
      <div className='preview__title'>{title}</div>
    </Link>
  );
};

export default CategoryPreview;
