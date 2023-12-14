import React from 'react';
import Nav from '../navbar';

const Layout = ({ children }) => (
  <div className='d-flex flex-column justify-content-betweend align-items-center'>
    <Nav />
    <div className='container-fluid mt-3'>
      {children}
    </div>
  </div>
);

export default Layout;
