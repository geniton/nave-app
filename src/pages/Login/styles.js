import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginCard = styled.div`
  width: 100%;
  max-width: 448px;
  padding: 32px;
  border: 1px solid ${props => props.theme.colors.grayHigh};
`

export const LinkLogo = styled(Link)`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  display: block;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.grayHigh};
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 22px;
  cursor: pointer;
  transition: 300ms all ease;
  font-weight: 600;
`

export const MessageFeedback = styled.span`
  color: ${props => props.theme.colors.red};
  display: block;
  font-size: 14px;
  margin-top: 10px;
`