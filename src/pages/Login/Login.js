import React from 'react';
import { ReactComponent as Logo } from 'images/nave-logo.svg'

// styles
import { Container, LoginCard, LinkLogo } from './styles'

const Login = () => {
  return (
      <Container>
        <LoginCard>
          <LinkLogo to="/">
            <Logo/>
          </LinkLogo>
          <form>
            <input type="text"/>
            <input type="password"/>
          </form>
        </LoginCard>
      </Container>
  )
}

export default Login;