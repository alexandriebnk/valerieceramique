import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import NavBar from './NavBar';
import ShopCart from './ShopCart';
import ErrorDatas from './ErrorDatas';
import Logo from '../assets/logo.svg';

const HEADERDATA = gql`
  query Header {
    header {
      data {
        attributes {
          title
          about
          shop
          gallery
          contact
          shopcart
        }
      }
    }
  }
`;

const Header = () => {
  const { error, data } = useQuery(HEADERDATA);
  const [mainTitle, setMainTitle] = useState(null);
  const [navbarTitles, setNavbarTitles] = useState(null);
  const [shopcartTitle, setShopcartTitle] = useState(null);

  useEffect(() => {
    if (data) {
      setMainTitle(data.header.data.attributes.title);
      setNavbarTitles({
        about: data.header.data.attributes.about,
        shop: data.header.data.attributes.shop,
        gallery: data.header.data.attributes.gallery,
        contact: data.header.data.attributes.contact,
      });
      setShopcartTitle(data.header.data.attributes.shopcart);
    }
  }, [data]);

  if (error) return <ErrorDatas />;

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <h1 aria-label='Valérie Céramique' className='header__wrapper__logo'>
            <img src={Logo} alt='logo' draggable='false' />
          </h1>
        </Link>
        <h3 className='header__wrapper__title'>{mainTitle}</h3>
        <div className='header__wrapper__navbar'>
          {navbarTitles && <NavBar titles={navbarTitles} />}
        </div>
      </div>

      <div className='header__shop-cart'>
        {shopcartTitle && <ShopCart title={shopcartTitle} />}
      </div>
    </header>
  );
};

export default Header;
