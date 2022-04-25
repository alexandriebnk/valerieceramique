import React from 'react';
import HeroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__image'>
        <img
          src={HeroImg}
          className='hero__image--item'
          alt='hero'
          draggable='false'
        />
      </div>

      <div className='hero__title'>
        <p className='hero__title--top'>Pottery Studio</p>
        <p className='hero__title--bottom'>Paris 18</p>
      </div>
    </div>
  );
};

export default Hero;
