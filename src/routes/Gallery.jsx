import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GALLERYIMAGEDATA = gql`
  query GalleryImage {
    galleryImages {
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

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

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
