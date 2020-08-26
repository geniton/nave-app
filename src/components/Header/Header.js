import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from 'contexts/AuthProvider'
import { ReactComponent as Logo } from 'images/nave-logo.svg'

import { Container, NavesLogo, Exit } from './styles';

function Header() {
  const { authenticated, Logout } = useContext(AuthContext)

  if (!authenticated) return false

  return (
    <Container>
      <NavesLogo>
        <Link to="/">
          <Logo/>
        </Link>
      </NavesLogo>
      <Exit onClick={() => Logout()}>Sair</Exit>
    </Container>
  );
}

export default Header;