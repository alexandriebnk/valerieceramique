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
      <h3 className='contact__title'>{title}</h3>
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
