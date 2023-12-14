import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ text }) => (
  <div className='position-absolute top-50 start-50'>
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    <p>{text}</p>
  </div>
);

export default Loader;
