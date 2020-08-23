import styled from 'styled-components'

export const Label = styled.label`
  position: relative;
  top: -12px;
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayHigh};

  &:nth-child(1) {
    margin-top: 50px;
  }

  &:nth-child(2) {
    margin-top: 32px;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 0;
    color: ${props => props.theme.colors.red};
  }
`
export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  padding: 11px 8px;
  border: 1px solid ${props => props.theme.colors.grayHigh};

  &:focus,
  &:actived,
  &:hover {
    border: 1px solid red;
  }

  &::placeholder {
    color: ${props => props.theme.colors.grayHigh};
    font-size: 16px;
    font-family:  ${props => props.theme.font};
  }
`
