import React, { useState, useEffect } from 'react';
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
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    if (data) setGalleryData(data.galleryImages.data);
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage page={'/gallery'} />;

  return (
    <div className='gallery'>
      {galleryData.map((image) => {
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
