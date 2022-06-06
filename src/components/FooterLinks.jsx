import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.context';

const FooterLinks = ({ data }) => {
  const { scrollTop } = useContext(CartContext);

  return (
    <div className='footer-links'>
      <p className='footer-links__item'>
        <Link to='/stockists' onClick={scrollTop}>
          {data.stockists}
        </Link>
      </p>
      <p className='footer-links__item'>
        <Link to='/mentions-legales' onClick={scrollTop}>
          {data.legalFR} - {data.legalEN}
        </Link>
      </p>
      <p className='footer-links__item'>
        <Link to='/cgv' onClick={scrollTop}>
          {data.conditionsFR} - {data.conditionsEN}
        </Link>
      </p>
      <p className='footer-links__item'>
        <Link to='/confidentialite' onClick={scrollTop}>
          {data.confidentialiteFR} - {data.confidentialiteEN}
        </Link>
      </p>
    </div>
  );
};

export default FooterLinks;
