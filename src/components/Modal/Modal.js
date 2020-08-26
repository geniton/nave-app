import React from 'react';

import { 
  Container,
  Wrapper, 
  Mask,
  Content
} from './styles';

function Modal({show, children}) {
  
  if (!show) return false

  return (
    <Container>
      <Wrapper>
        <Mask/>
        <Content>
          {children}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Modal;