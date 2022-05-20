import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import NavBar from './NavBar';
import ShopCart from './ShopCart';
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
  const { loading, error, data } = useQuery(HEADERDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  const title = data.header.data.attributes.title;

  const navbarTitles = {
    about: data.header.data.attributes.about,
    shop: data.header.data.attributes.shop,
    gallery: data.header.data.attributes.gallery,
    contact: data.header.data.attributes.contact,
  };

  const shopcartTitle = data.header.data.attributes.shopcart;

  return (
    <div className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <h1 aria-label='Valérie Céramique' className='header__wrapper__logo'>
            <img src={Logo} alt='logo' draggable='false' />
          </h1>
        </Link>
        <h2 className='header__wrapper__title'>{title}</h2>
        <div className='header__wrapper__navbar'>
          <NavBar titles={navbarTitles} />
        </div>
      </div>

      <div className='header__shop-cart'>
        <ShopCart title={shopcartTitle} />
      </div>
    </div>
  );
};

export default Header;
