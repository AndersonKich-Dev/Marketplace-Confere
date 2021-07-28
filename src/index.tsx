import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fonts from './fonts'
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Fonts/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 
