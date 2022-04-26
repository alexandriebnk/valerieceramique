const BurgerIcon = () => {
  return (
    <svg
      className='burger-icon'
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        className='burger-icon--top'
        x='1'
        y='16'
        width='22'
        height='1'
        fill='#0E184D'
      />
      <rect
        className='burger-icon--middle'
        x='1'
        y='9'
        width='22'
        height='1'
        fill='#0E184D'
      />
      <rect
        className='burger-icon--bottom'
        x='1'
        y='2'
        width='22'
        height='1'
        fill='#0E184D'
      />
    </svg>
  );
};

export default BurgerIcon;
