import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='stockists'>
      <p className='stockists__title'>Stockists</p>
      {data.stockists.data.map((distributor) => {
        return (
          <div key={distributor.attributes.title} className='stockists__shop'>
            <p>{distributor.attributes.title}</p>
            <p>{distributor.attributes.location}</p>
            <a href={`'https://www.${distributor.attributes.website}'`}>
              {distributor.attributes.website}
            </a>
            <p className='stockists__title--country'>
              {distributor.attributes.country}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stockists;
