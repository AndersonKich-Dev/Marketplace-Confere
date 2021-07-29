import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fonts from './fonts'
import GlobalStyle from './styles/GlobalStyle'

import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/ligth'

import Routes from './config/routes'

ReactDOM.render(
  <React.StrictMode>
    <Fonts/>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
