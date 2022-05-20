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
    <div className='privacy infos'>
      <div className='privacy__fr infos__fr'>
        <h3>{data?.privacy?.data?.attributes?.titleFR}</h3>
        {data?.privacy?.data?.attributes?.sectionsFR.map((section) => (
          <section
            key={section.Title}
            className='privacy__fr__section infos__fr__section'
          >
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
      <div className='privacy__en infos__en'>
        <h3>{data?.privacy?.data?.attributes?.titleEN}</h3>
        {data?.privacy?.data?.attributes?.sectionsEN.map((section) => (
          <section
            key={section.Title}
            className='privacy__en__section infos__en__section'
          >
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
