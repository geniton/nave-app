import React from 'react';
import { Wrapper } from './styles'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import themeStyle from './themeStyle'

function Main ({children}) {
  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyles/>
      <Wrapper>
        {children}
      </Wrapper>
    </ThemeProvider>
  )
}

export default Main;