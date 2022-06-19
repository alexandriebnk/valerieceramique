import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Gsap from 'gsap';
import ErrorMessage from '../components/ErrorMessage';

const CONTACTDATA = gql`
  query Contact {
    contact {
      data {
        attributes {
          title
          location
          email
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

const Contact = () => {
  const { error, data } = useQuery(CONTACTDATA);
  const [mainTitle, setMainTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [email, setEmail] = useState(null);
  const [visual, setVisual] = useState(null);
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (data) {
      setMainTitle(data.contact.data.attributes.title);
      setLocation(data.contact.data.attributes.location);
      setEmail(data.contact.data.attributes.email);
      setVisual(
        data.contact.data.attributes.visual.data.attributes.formats.small.url
      );
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

  if (error) return <ErrorMessage page={'/contact'} />;

  return (
    <div className='contact'>
      <h3 className='contact__title'>{mainTitle}</h3>
      <div className='contact__address'>
        <p>{location}</p>
        <p>{email}</p>
      </div>
      <div className='contact__shop'>
        <img src={visual} alt='shop' draggable='false' />
      </div>
    </div>
  );
};

export default Contact;
