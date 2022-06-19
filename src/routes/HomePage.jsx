import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Gsap from 'gsap';
import ErrorMessage from '../components/ErrorMessage';

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
  const { error, data } = useQuery(HOMEDATA);
  const [url, setUrl] = useState(null);
  const [name, setName] = useState(null);
  const [mainTitle, setMainTitle] = useState(null);
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (data) {
      setUrl(
        data.home.data.attributes.visual.data.attributes.formats.large.url
      );
      setName(data.home.data.attributes.name);
      setMainTitle(data.home.data.attributes.title);
    }
  }, [data]);

  useEffect(() => {
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

  if (error) return <ErrorMessage page={'/'} />;

  return (
    <div className='home-page'>
      <div className='home-page__image'>
        <img src={url} alt='hero' draggable='false' />
      </div>
      <div className='home-page__title'>
        <h3>{name}</h3>
        <h3>{mainTitle}</h3>
      </div>
    </div>
  );
};

export default HomePage;
