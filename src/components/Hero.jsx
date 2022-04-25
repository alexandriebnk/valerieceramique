import React from 'react';
import HeroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <div>
      <img src={HeroImg} className='hero' alt='hero' />
    </div>
  );
};

export default Hero;
