import React from 'react';
import { useQuery, gql } from '@apollo/client';

const HOMEDATA = gql`
  query Home {
    home {
      data {
        attributes {
          name
          title
          visual {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(HOMEDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  const url =
    data.home.data.attributes.visual.data.attributes.formats.large.url;
  const name = data.home.data.attributes.name;
  const title = data.home.data.attributes.title;

  return (
    <div className='home-page'>
      <div className='hero'>
        <div className='hero__image'>
          <img
            src={url}
            className='hero__image--item'
            alt='hero'
            draggable='false'
          />
        </div>
        <div className='hero__title'>
          <p className='hero__title--top'>{name}</p>
          <p className='hero__title--bottom'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
