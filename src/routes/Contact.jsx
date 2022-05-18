import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  const title = data.contact.data.attributes.title;
  const location = data.contact.data.attributes.location;
  const email = data.contact.data.attributes.email;
  const visual =
    data.contact.data.attributes.visual.data.attributes.formats.large.url;

  return (
    <div className='contact'>
      <p className='contact__title'>{title}</p>
      <div className='contact__address'>
        <p className='contact__title--city'>{location}</p>
        <p className='contact__title--email'>{email}</p>
      </div>
      <img
        src={visual}
        className='contact__shop'
        alt='shop'
        draggable='false'
      />
    </div>
  );
};

export default Contact;
