import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const GALLERYIMAGEDATA = gql`
  query GalleryImage {
    galleryImages(
      sort: "createdAt:desc"
      pagination: { start: 1, limit: 1000 }
    ) {
      data {
        attributes {
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
`;

const Gallery = () => {
  const { loading, error, data } = useQuery(GALLERYIMAGEDATA);
  const { gallery } = useParams();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={`/${gallery}`} />;

  return (
    <div className='gallery'>
      {data.galleryImages.data.map((image) => {
        return (
          <div
            key={image.attributes.image.data.attributes.formats.large.url}
            className='gallery__image'
          >
            <img
              src={image.attributes.image.data.attributes.formats.large.url}
              alt='gallery-item'
              draggable='false'
            />
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
