import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import ParagraphHTML from '../components/ParagraphHTML';
import Loader from '../components/Loader';
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
  const { loading, error, data } = useQuery(ABOUTDATA);
  const [descriptionFR, setDescriptionFR] = useState(null);
  const [descriptionEN, setDescriptionEN] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [visual, setVisual] = useState(null);

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

  if (loading) return <Loader />;
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
