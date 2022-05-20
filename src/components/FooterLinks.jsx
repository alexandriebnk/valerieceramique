import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = ({ data }) => {
  return (
    <div className='informations'>
      <p className='informations__item'>
        <Link to='/stockists'>{data.stockists}</Link>
      </p>
      <p className='informations__item'>
        <Link to='/mentions-legales'>
          {data.legalFR} - {data.legalEN}
        </Link>
      </p>
      <p className='informations__item'>
        <Link to='/cgv'>
          {data.conditionsFR} - {data.conditionsEN}
        </Link>
      </p>
      <p className='informations__item'>
        <Link to='/confidentialite'>
          {data.confidentialiteFR} - {data.confidentialiteEN}
        </Link>
      </p>
    </div>
  );
};

export default FooterLinks;
