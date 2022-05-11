import React from 'react';

const DescriptionProd = ({
  title,
  details,
  material,
  design,
  dimensions,
  weight,
  capacity,
  titleWeight,
  titleCapacity,
}) => {
  return (
    <>
      <p className='title'>{title}</p>
      <p className='details'>{details}</p>
      <p className='material'>{material}</p>
      <p className='design'>{design}</p>
      <p className='dimensions'>
        Dimensions : Ø {dimensions.diameter} cm / h. {dimensions.height} cm
      </p>
      <p className='weight'>
        {titleWeight} : {weight} gr
      </p>
      <p className='capacity'>
        {titleCapacity} : {capacity} ml
      </p>
    </>
  );
};

export default DescriptionProd;
