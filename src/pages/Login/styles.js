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