import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = ({ page }) => {
  return (
    <div>
      <p>Oups !</p>
      <Link to={page}>Refresh</Link>
    </div>
  );
};

export default ErrorMessage;
