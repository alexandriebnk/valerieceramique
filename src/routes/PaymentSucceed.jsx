import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import UserMessage from '../components/UserMessage';
import Loader from '../components/Loader';

const CREATEORDER = gql`
  mutation CreateOrder($address: String!) {
    createOrder(data: { address: $address }) {
      data {
        id
        attributes {
          address
        }
      }
    }
  }
`;

const PaymentSucceed = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(CREATEORDER, {
    variables: { address: 'super order' },
  });

  useEffect(() => {
    //mutateFunction();

    if (data) console.log(data);
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <p>Error..</p>;

  return (
    <div>
      <UserMessage title={'Payment succeed'} subtitle={'Thank you !'} />
    </div>
  );
};

export default PaymentSucceed;
