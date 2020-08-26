import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: block;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.grayHigh};
  border: none;
  width: ${({fullWidth}) => fullWidth ? '100%' : '175px'};
  padding: 10px;
  margin-top: 22px;
  margin-left: ${({fullWidth}) => fullWidth ? '0' : 'auto'};
  cursor: pointer;
  transition: 300ms all ease;
  font-weight: 600;
`