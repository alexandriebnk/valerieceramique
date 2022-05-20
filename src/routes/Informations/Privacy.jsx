import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ParagraphHTML from '../../components/ParagraphHTML';

const PRIVACYDATA = gql`
  query Privacy {
    privacy {
      data {
        attributes {
          titleFR
          titleEN
          sectionsFR {
            Title
            Content
          }
          sectionsEN {
            Title
            Content
          }
        }
      }
    }
  }
`;

const Privacy = () => {
  const { loading, error, data } = useQuery(PRIVACYDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;
  return (
    <div className='privacy'>
      <div className='privacy__fr'>
        <h2>{data?.privacy?.data?.attributes?.titleFR}</h2>
        {data?.privacy?.data?.attributes?.sectionsFR.map((section) => (
          <section key={section.Title} className='privacy__fr-section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
      <div className='privacy__en'>
        <h2>{data?.privacy?.data?.attributes?.titleEN}</h2>
        {data?.privacy?.data?.attributes?.sectionsEN.map((section) => (
          <section key={section.Title} className='privacy__en-section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
