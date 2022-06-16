import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Gsap from 'gsap';
import ParagraphHTML from '../components/ParagraphHTML';
import ErrorMessage from '../components/ErrorMessage';

const LEGALINFOS = gql`
  query Informations($slug: String!) {
    informations(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          titleFR
          titleEN
          sectionFR {
            title
            content
          }
          sectionEN {
            title
            content
          }
        }
      }
    }
  }
`;

const LegalInfos = () => {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[1];
  const [animationEnd, setAnimationEnd] = useState(false);

  const { error, data } = useQuery(LEGALINFOS, {
    variables: { slug },
  });

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

  if (error) return <ErrorMessage page={`/${slug}`} />;

  return (
    <div className='infos'>
      <div className='infos__fr'>
        <h3>{data?.informations.data[0].attributes.titleFR}</h3>
        {data?.informations.data[0].attributes.sectionFR.map((section) => (
          <section key={section.title} className='infos__fr__section'>
            {section.title && <h4>{section.title}</h4>}
            {section.content && <ParagraphHTML content={section.content} />}
          </section>
        ))}
      </div>
      <div className='infos__en'>
        <h3>{data?.informations.data[0].attributes.titleEN}</h3>
        {data?.informations.data[0].attributes.sectionEN.map((section) => (
          <section key={section.title} className='infos__en__section'>
            {section.title && <h4>{section.title}</h4>}
            {section.content && <ParagraphHTML content={section.content} />}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalInfos;
