import React, { useState, useEffect } from 'react';
import Gsap from 'gsap';

import UserMessage from '../components/UserMessage';

const PageNotFound = () => {
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const tl = new Gsap.timeline({ onComplete: () => setAnimationEnd(true) });
    tl.set('.loader', { opacity: 1 });
    tl.fromTo(
      '.loader__top',
      0.5,
      { opacity: 0, top: '-10rem' },
      { opacity: 1, top: '-2rem' }
    );
    tl.fromTo(
      '.loader__bottom',
      0.5,
      { opacity: 0, top: '10rem' },
      { opacity: 1, top: '2rem' },
      '-=0.5'
    );
  }, []);

  useEffect(() => {
    if (animationEnd) {
      const tl = new Gsap.timeline();
      tl.fromTo(
        '.loader__top',
        0.5,
        { opacity: 1, top: '-2rem' },
        { opacity: 0, top: '-10rem' }
      );
      tl.fromTo(
        '.loader__bottom',
        0.5,
        { opacity: 1, top: '2rem' },
        { opacity: 0, top: '10rem' },
        '-=0.5'
      );
      tl.fromTo('.loader', 0.5, { opacity: 1 }, { opacity: 0 }, '-=0.25');
    }
  }, [animationEnd]);
  return (
    <UserMessage
      title={'404'}
      subtitle={'Page not found !'}
      page={'/'}
      message={'Go to home'}
    />
  );
};

export default PageNotFound;
