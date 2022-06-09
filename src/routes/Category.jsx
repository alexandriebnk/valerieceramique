import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Product from '../components/Product';
import ParagraphHTML from '../components/ParagraphHTML';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

import { DescriptionContext } from '../context/description.context';

const PRODUCTDATA = gql`
  query Product($category: String!) {
    products(
      sort: "createdAt:desc"
      pagination: { start: 1, limit: 1000 }
      filters: { category: { title: { contains: $category } } }
    ) {
      data {
        attributes {
          category {
            data {
              attributes {
                title
              }
            }
          }
          slug
          title
          price
          gallery {
            image {
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
  }
`;

const Category = () => {
  const { category } = useParams();
  const { loading, error, data } = useQuery(PRODUCTDATA, {
    variables: { category },
  });
  const [filteredProducts, setFilteredProducts] = useState(null);

  const { descriptionFR, descriptionEN } = useContext(DescriptionContext);

  useEffect(() => {
    if (data) {
      const products = data.products.data.filter((product) => {
        return product.attributes.category.data.attributes.title === category;
      });
      setFilteredProducts(products);
    }
  }, [data, category]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={`/shop/${category}`} />;

  return (
    <div className='category'>
      <div className='category__description'>
        {descriptionFR && <ParagraphHTML content={descriptionFR} />}
        {descriptionEN && <ParagraphHTML content={descriptionEN} />}
      </div>
      <h2 className='category__title'>{category}</h2>
      <div className='category__product'>
        {filteredProducts?.map((product) => {
          return (
            <Product
              key={`${product.attributes.title}`}
              category={category}
              title={product.attributes.title}
              gallery={product.attributes.gallery}
              price={product.attributes.price}
              id={product.attributes.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
