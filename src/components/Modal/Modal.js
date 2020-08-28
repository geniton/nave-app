import React from 'react';

import { 
  Container,
  Mask,
  Content,
  Close
} from './styles';

function Modal({show, children, size, closeModal}) {
  
  if (!show) return false

  return (
    <Container>
      <Mask/>
      <Content size={size}>
        { closeModal ? 
        <Close onClick={() => closeModal()}>
          <i></i>
          <i></i>
        </Close> : null }
        {children}
      </Content>
    </Container>
  );
}

export default Modal;