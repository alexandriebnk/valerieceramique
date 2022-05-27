import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import CategoryPreview from './CategoryPreview';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const CATEGORYDATA = gql`
  query Category {
    categories(sort: "createdAt:desc", pagination: { start: 1, limit: 1000 }) {
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
  const { shop } = useParams();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={`/${shop}`} />;

  return (
    <div className='list'>
      <div className='categories'>
        <ul className='categories__left'>
          {data.categories.data.map((category, index) => {
            if (index % 2 === 0) {
              return (
                <li
                  className='categories__left__category'
                  key={`${category}-${index}`}
                >
                  <CategoryPreview category={category} />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul className='categories__right'>
          {data.categories.data.map((category, index) => {
            if (index % 2 !== 0) {
              return (
                <li
                  className='categories__right__category'
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
