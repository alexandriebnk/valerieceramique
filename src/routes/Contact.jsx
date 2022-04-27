import React from 'react';
import Shop from '../assets/shop.png';

const Contact = () => {
  return (
    <div className='contact'>
      <p className='contact__title'>Atelier</p>
      <div className='contact__address'>
        <p className='contact__title--city'>73 rue du Poteau, Paris 18</p>
        <p className='contact__title--email'>m : hello@atelierkimle.com</p>
      </div>
      <img
        src={Shop}
        className='contact__shop'
        alt='portrait'
        draggable='false'
      />
    </div>
  );
};

export default Contact;
