import { createContext, useState } from 'react';

export const AnimationContext = createContext({
  animationEnd: false,
  setAnimationEnd: () => {},
  aboutData: 'salut',
  setAboutData: () => {},
});

export const AnimationProvider = ({ children }) => {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [aboutData, setAboutData] = useState('salut');

  /* useEffect(() => {
    // animate loader in
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
    if (data && animationEnd) {
      // animate loader out
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
  }, [data, animationEnd]);*/

  const value = {
    animationEnd,
    setAnimationEnd,
    aboutData,
    setAboutData,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
