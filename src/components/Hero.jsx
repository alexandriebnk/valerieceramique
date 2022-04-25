import React from 'react';
import HeroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img
        src={HeroImg}
        className='hero__illustration'
        alt='hero'
        draggable='false'
      />
      <div className='hero__title'>
        <p>Pottery Studio</p>
        <p>Paris 18</p>
      </div>
    </div>
  );
};

export default Hero;
