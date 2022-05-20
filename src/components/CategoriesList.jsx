import React from 'react';
import CategoryPreview from './CategoryPreview';
import { useQuery, gql } from '@apollo/client';

const CATEGORYDATA = gql`
  query Category {
    categories {
      data {
        attributes {
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

const CategoriesList = () => {
  const { loading, error, data } = useQuery(CATEGORYDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='list'>
      <div className='list__categories'>
        <ul className='list__categories--left'>
          {data.categories.data.map((category, index) => {
            if (index % 2 === 0) {
              return (
                <li
                  className='list__categories--left-category'
                  key={`${category}-${index}`}
                >
                  <CategoryPreview category={category} />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul className='list__categories--right'>
          {data.categories.data.map((category, index) => {
            if (index % 2 !== 0) {
              return (
                <li
                  className='list__categories--right-category'
                  key={`${category}-${index}`}
                >
                  <CategoryPreview
                    category={category}
                    key={`${category}-${index}`}
                    reverse
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
