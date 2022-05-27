import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Subscription from './Subscription';
import Social from './Social';
import FooterLinks from './FooterLinks';
import Loader from './Loader';

const FOOTERDATA = gql`
  query Footer {
    footer {
      data {
        attributes {
          newsletterFR
          newsletterEN
          emailPlaceholder
          subscribeButton
          privacyFR
          privacyEN
          stockists
          legalFR
          legalEN
          conditionsFR
          conditionsEN
          confidentialiteFR
          confidentialiteEN
          copyright
        }
      }
    }
  }
`;

const Footer = () => {
  const { loading, error, data } = useQuery(FOOTERDATA);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [linksData, setLinksData] = useState(null);
  const [copyright, setCopyright] = useState(null);

  useEffect(() => {
    if (data) {
      setSubscriptionData({
        newsletterFR: data.footer.data.attributes.newsletterFR,
        newsletterEN: data.footer.data.attributes.newsletterEN,
        emailPlaceholder: data.footer.data.attributes.emailPlaceholder,
        subscribeButton: data.footer.data.attributes.subscribeButton,
        privacyFR: data.footer.data.attributes.privacyFR,
        privacyEN: data.footer.data.attributes.privacyEN,
      });
      setLinksData({
        stockists: data.footer.data.attributes.stockists,
        legalFR: data.footer.data.attributes.legalFR,
        legalEN: data.footer.data.attributes.legalEN,
        conditionsFR: data.footer.data.attributes.conditionsFR,
        conditionsEN: data.footer.data.attributes.conditionsEN,
        confidentialiteFR: data.footer.data.attributes.confidentialiteFR,
        confidentialiteEN: data.footer.data.attributes.confidentialiteEN,
      });
      setCopyright(data.footer.data.attributes.copyright);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <p>Error..</p>;
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__content__subscription item'>
          {subscriptionData && <Subscription data={subscriptionData} />}
        </div>
        <div className='footer__content__social item'>
          <Social />
        </div>
        <div className='footer__content__informations item'>
          {linksData && <FooterLinks data={linksData} />}
        </div>
        <div className='footer__content__copyright item'>{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
