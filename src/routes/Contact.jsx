import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader';

const CONTACTDATA = gql`
  query Contact {
    contact {
      data {
        attributes {
          title
          location
          email
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

const Contact = () => {
  const { loading, error, data } = useQuery(CONTACTDATA);
  const [mainTitle, setMainTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [email, setEmail] = useState(null);
  const [visual, setVisual] = useState(null);

  useEffect(() => {
    if (data) {
      setMainTitle(data.contact.data.attributes.title);
      setLocation(data.contact.data.attributes.location);
      setEmail(data.contact.data.attributes.email);
      setVisual(
        data.contact.data.attributes.visual.data.attributes.formats.large.url
      );
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <p>Error..</p>;

  return (
    <div className='contact'>
      <h3 className='contact__title'>{mainTitle}</h3>
      <div className='contact__address'>
        <p>{location}</p>
        <p>{email}</p>
      </div>
      <div className='contact__shop'>
        <img src={visual} alt='shop' draggable='false' />
      </div>
    </div>
  );
};

export default Contact;
