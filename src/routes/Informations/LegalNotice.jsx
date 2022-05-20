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
    <div className='legalnotice infos'>
      <div className='legalnotice__fr infos__fr'>
        <h3>{data?.legalNotice?.data?.attributes?.titleFR}</h3>
        {data?.legalNotice?.data?.attributes?.sectionsFR.map((section) => (
          <section
            key={section.Title}
            className='legalnotice__fr__section infos__fr__section'
          >
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
      <div className='legalnotice__en infos__en'>
        <h3>{data?.legalNotice?.data?.attributes?.titleEN}</h3>
        {data?.legalNotice?.data?.attributes?.sectionsEN.map((section) => (
          <section
            key={section.Title}
            className='legalnotice__en__section infos__en__section'
          >
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalNotice;
