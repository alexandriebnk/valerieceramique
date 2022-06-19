import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Gsap from 'gsap';
import ParagraphHTML from '../components/ParagraphHTML';
import ErrorMessage from '../components/ErrorMessage';

const ABOUTDATA = gql`
  query About {
    about {
      data {
        attributes {
          descriptionFR
          descriptionEN
          copyright
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

const About = () => {
  const { error, data } = useQuery(ABOUTDATA);
  const [descriptionFR, setDescriptionFR] = useState(null);
  const [descriptionEN, setDescriptionEN] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [visual, setVisual] = useState(null);
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (data) {
      setDescriptionFR(data.about.data.attributes.descriptionFR);
      setDescriptionEN(data.about.data.attributes.descriptionEN);
      setCopyright(data.about.data.attributes.copyright);
      setVisual(
        data.about.data.attributes.visual.data.attributes.formats.medium.url
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

  if (error) return <ErrorMessage page={'/about'} />;

  return (
    <div className='about'>
      <div className='about__biography'>
        <div className='about__biography--fr'>
          {descriptionFR && <ParagraphHTML content={descriptionFR} />}
        </div>
        <div className='about__biography--en'>
          {descriptionEN && <ParagraphHTML content={descriptionEN} />}
        </div>
        <div className='about__biography__copyright'>{copyright}</div>
      </div>
      <div className='about__portrait'>
        <img src={visual} alt='portrait' draggable='false' />
      </div>
    </div>
  );
};

export default About;
