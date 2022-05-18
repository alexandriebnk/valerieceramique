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

  console.log();

  return (
    <div className='home-page'>
      <div className='hero'>
        <div className='hero__image'>
          <img
            src={
              data.home.data.attributes.visual.data.attributes.formats.large.url
            }
            className='hero__image--item'
            alt='hero'
            draggable='false'
          />
        </div>
        <div className='hero__title'>
          <p className='hero__title--top'>{data.home.data.attributes.name}</p>
          <p className='hero__title--bottom'>
            {data.home.data.attributes.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
