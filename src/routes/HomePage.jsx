import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader';

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
  const [url, setUrl] = useState(null);
  const [name, setName] = useState(null);
  const [mainTitle, setMainTitle] = useState(null);

  useEffect(() => {
    if (data) {
      setUrl(
        data.home.data.attributes.visual.data.attributes.formats.large.url
      );
      setName(data.home.data.attributes.name);
      setMainTitle(data.home.data.attributes.title);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <p>Error..</p>;

  return (
    <div className='home-page'>
      <div className='hero'>
        <div className='hero__image'>
          <img src={url} alt='hero' draggable='false' />
        </div>
        <div className='hero__title'>
          <h3>{name}</h3>
          <h3>{mainTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
