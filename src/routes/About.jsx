import React from 'react';
import { useQuery, gql } from '@apollo/client';

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
  const { loading, error, data } = useQuery(ABOUTDATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  const descriptionFR = data.about.data.attributes.descriptionFR;
  const descriptionEN = data.about.data.attributes.descriptionEN;
  const copyright = data.about.data.attributes.copyright;
  const visual =
    data.about.data.attributes.visual.data.attributes.formats.large.url;

  return (
    <div className='about'>
      <div className='about__biography'>
        <p className='about__biography--fr'>{descriptionFR}</p>
        <p className='about__biography--en'>{descriptionEN}</p>
        <div className='about__biography--copyright'>{copyright}</div>
      </div>
      <div className='about__portrait'>
        <img
          src={visual}
          className='about__portrait--item'
          alt='portrait'
          draggable='false'
        />
      </div>
    </div>
  );
};

export default About;
