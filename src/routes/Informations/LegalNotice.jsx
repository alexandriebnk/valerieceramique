import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ParagraphHTML from '../../components/ParagraphHTML';

const LEGALNOTICEDATA = gql`
  query LegalNotice {
    legalNotice {
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

const LegalNotice = () => {
  const { loading, error, data } = useQuery(LEGALNOTICEDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;
  return (
    <div className='legalnotice'>
      <div className='legalnotice__fr'>
        <h2>{data?.legalNotice?.data?.attributes?.titleFR}</h2>
        {data?.legalNotice?.data?.attributes?.sectionsFR.map((section) => (
          <section key={section.Title} className='legalnotice__fr-section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
      <div className='legalnotice__en'>
        <h2>{data?.legalNotice?.data?.attributes?.titleEN}</h2>
        {data?.legalNotice?.data?.attributes?.sectionsEN.map((section) => (
          <section key={section.Title} className='legalnotice__en-section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalNotice;
