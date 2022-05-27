import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const STOCKISTSDATA = gql`
  query Stokists {
    stockists {
      data {
        attributes {
          title
          location
          website
          country
        }
      }
    }
  }
`;

const Stockists = () => {
  const { loading, error, data } = useQuery(STOCKISTSDATA);
  const { stockists } = useParams();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={`/${stockists}`} />;

  return (
    <div className='stockists'>
      <p className='stockists__title'>Stockists</p>
      {data.stockists.data.map((distributor) => {
        return (
          <div key={distributor.attributes.title} className='stockists__shop'>
            <h3>{distributor.attributes.title}</h3>
            <p>{distributor.attributes.location}</p>
            <a href={`'https://www.${distributor.attributes.website}'`}>
              {distributor.attributes.website}
            </a>
            <p className='stockists__shop__country'>
              {distributor.attributes.country}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stockists;
