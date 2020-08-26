import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/AuthProvider'
import GlobalStyles from './globalStyles'
import themeStyle from './themeStyle'
import history from 'history.js'

// styles
import { Wrapper } from './styles'

// components
import Header from 'components/Header'

// routes
import Routes from 'routes'

function Main () {
  return (
    <AuthProvider>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyles/>
        <BrowserRouter>
          <Router history={history}>
            <Header />
            <Wrapper>
              <Routes/>
            </Wrapper>
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default Main;