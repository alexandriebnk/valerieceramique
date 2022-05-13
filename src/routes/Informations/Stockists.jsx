import React from 'react';

const Stockists = () => {
  return (
    <div className='stockists'>
      <p className='stockists__title'>Stockists</p>
      <p className='stockists__title--france'>FRANCE</p>
      <div className='stockists__shop'>
        <p>La Lune Décoration</p>
        <p>Online</p>
        <a href='https://www.lalunedecoration.com'>lalunedecoration.com</a>
      </div>

      <div className='stockists__shop'>
        <p>Brutal Ceramics</p>
        <p>Online</p>
        <a href='https://www.brutalceramics.com'>brutalceramics.com</a>
      </div>
      <p className='stockists__title--japan'>JAPAN</p>
      <div className='stockists__shop'>
        <p>General Furnishings & Co</p>
        <p>202, 1-8-10, Sendagaya, Shibuya-ku</p>
        <p>Tokyo, 151-0051</p>
        <a href='https://www.gfandco-shop.com'>gfandco-shop.com</a>
      </div>
    </div>
  );
};

export default Stockists;
