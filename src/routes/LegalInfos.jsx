import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ParagraphHTML from '../components/ParagraphHTML';

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

  const { loading, error, data } = useQuery(LEGALINFOS, {
    variables: { slug },
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  return (
    <div className='infos'>
      <div className='infos__fr'>
        <h3>{data.informations.data[0].attributes.titleFR}</h3>
        {data.informations.data[0].attributes.sectionFR.map((section) => (
          <section key={section.title} className='infos__fr__section'>
            {section.title && <h3>{section.title}</h3>}
            {section.content && <ParagraphHTML content={section.content} />}
          </section>
        ))}
      </div>
      <div className='infos__en'>
        <h3>{data.informations.data[0].attributes.titleEN}</h3>
        {data.informations.data[0].attributes.sectionEN.map((section) => (
          <section key={section.title} className='infos__en__section'>
            {section.title && <h3>{section.title}</h3>}
            {section.content && <ParagraphHTML content={section.content} />}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalInfos;
