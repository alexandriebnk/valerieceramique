import React from 'react';
import Content from '../components/Content';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop__description'>
        <p className='shop__description--fr'>
          Bienvenue dans la boutique en ligne de l’atelier.
          <br /> Chacune des pièces disponible dans cette boutique a été
          réalisée à la main, du tournage à l’émaillage dans mon atelier à
          Paris. Pour les personnes habitant en région parisienne, le retrait à
          l’atelier est disponible dans les options de livraison à la
          confirmation de votre commande.
        </p>
        <p className='shop__description--en'>
          Welcome to the studio online shop.
          <br /> Each of the pieces available in this shop has been handmade,
          from throwing to glazing in my studio in Paris. Delivery is available
          worldwide. For international shipments, please note that customs fees
          and local taxes may apply. For people living in the area, the pick-up
          at the studio is available in the delivery options upon confirmation
          of your order.
        </p>
      </div>
      <div className='shop__content'>
        <Content />
      </div>
    </div>
  );
};

export default Shop;
