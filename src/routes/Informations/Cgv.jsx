import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ParagraphHTML from '../../components/ParagraphHTML';

const CGVDATA = gql`
  query Cgv {
    cgv {
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

const Cgv = () => {
  const { loading, error, data } = useQuery(CGVDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;
  return (
    <div className='infos'>
      <div className='infos__fr'>
        <h3>{data?.cgv?.data?.attributes?.titleFR}</h3>
        {data?.cgv?.data?.attributes?.sectionsFR.map((section) => (
          <section key={section.Title} className='infos__fr__section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
      <div className='infos__fr'>
        <h3>{data?.cgv?.data?.attributes?.titleEN}</h3>
        {data?.cgv?.data?.attributes?.sectionsEN.map((section) => (
          <section key={section.Title} className='infos__fr__section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Cgv;
