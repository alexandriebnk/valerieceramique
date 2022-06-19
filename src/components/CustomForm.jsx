import React, { useRef } from 'react';

const CustomForm = ({ status, onValidated }) => {
  const inputToClear = useRef();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (validateEmail(email)) {
      onValidated({ EMAIL: email });
      inputToClear.current.value = '';
    }
  };

  return (
    <>
      <form className='subscribe__form' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          className='subscribe__input'
          ref={inputToClear}
          required
        />
        <input
          className='subscribe__submit'
          label='Subscribe'
          type='submit'
          value='Subscribe'
        />
      </form>
      {status === 'sending' && (
        <div className='subscribe__status'>Sending...</div>
      )}
      {status === 'error' && <div className='subscribe__status'>Error !</div>}
      {status === 'success' && (
        <p className='subscribe__status'>Email address recorded !</p>
      )}
    </>
  );
};

export default CustomForm;
