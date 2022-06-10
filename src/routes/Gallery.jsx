import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Gsap from 'gsap';
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
  const { error, data } = useQuery(GALLERYIMAGEDATA);
  const [galleryData, setGalleryData] = useState([]);
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    if (data) setGalleryData(data.galleryImages.data);
  }, [data]);

  useEffect(() => {
    // animate loader in
    const tl = new Gsap.timeline({ onComplete: () => setAnimationEnd(true) });
    tl.set('.loader', { opacity: 1 });
    tl.fromTo(
      '.loader__top',
      0.5,
      { opacity: 0, top: '-10rem' },
      { opacity: 1, top: '-2rem' }
    );
    tl.fromTo(
      '.loader__bottom',
      0.5,
      { opacity: 0, top: '10rem' },
      { opacity: 1, top: '2rem' },
      '-=0.5'
    );
  }, []);

  useEffect(() => {
    if (data && animationEnd) {
      // animate loader out
      const tl = new Gsap.timeline();
      tl.fromTo(
        '.loader__top',
        0.5,
        { opacity: 1, top: '-2rem' },
        { opacity: 0, top: '-10rem' }
      );
      tl.fromTo(
        '.loader__bottom',
        0.5,
        { opacity: 1, top: '2rem' },
        { opacity: 0, top: '10rem' },
        '-=0.5'
      );
      tl.fromTo('.loader', 0.5, { opacity: 1 }, { opacity: 0 }, '-=0.25');
    }
  }, [data, animationEnd]);

  if (error) return <ErrorMessage page={'/gallery'} />;

  return (
    <div className='gallery'>
      {galleryData.map((image) => {
        return (
          <div
            key={image.attributes.image.data.attributes.formats.medium.url}
            className='gallery__image'
          >
            <img
              src={image.attributes.image.data.attributes.formats.medium.url}
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
