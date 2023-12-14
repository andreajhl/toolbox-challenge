import React, { useState } from 'react';
import { Toast as ToastBT, ToastContainer } from 'react-bootstrap';

const Toast = ({
  title,
  content,
  delay = 3000,
  variant= 'light'
}) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <ToastContainer position='bottom-end' >
      <ToastBT
        autohide 
        show={show}
        bg={variant}
        delay={delay}
        className='mb-5'
        onClose={handleClose}
      >
        <ToastBT.Header className='d-flex justify-content-between'>
          {title}
        </ToastBT.Header>
        <ToastBT.Body>{content}</ToastBT.Body>
      </ToastBT>      
    </ToastContainer>
  );
};

export default Toast;
