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
    <div className='cgv'>
      <div className='cgv__fr'>
        <h2>{data?.cgv?.data?.attributes?.titleFR}</h2>
        {data?.cgv?.data?.attributes?.sectionsFR.map((section) => (
          <section key={section.Title} className='cgv__fr-section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
      <div className='cgv__en'>
        <h2>{data?.cgv?.data?.attributes?.titleEN}</h2>
        {data?.cgv?.data?.attributes?.sectionsEN.map((section) => (
          <section key={section.Title} className='cgv__en-section'>
            <h3>{section.Title}</h3>
            <ParagraphHTML content={section.Content} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Cgv;
