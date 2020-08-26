import React from 'react';

import { ButtonContainer } from './styles';

function Button(props) {
  const {
    fullWidth = false,
    children,
    color,
    bgColor
  } = props

  return (
    <ButtonContainer 
      fullWidth={fullWidth} 
      color={color} 
      bgColor={bgColor}>
      {children}
    </ButtonContainer>
  );
}

export default Button;