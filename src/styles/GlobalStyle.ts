import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }   
  }
  @media (max-width: 720px) {
    html {
      font-size: 75%;
    }   
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Lexend_600, sans-serif;  
  }
  ul{
    list-style: none;
  }
  p, input, textarea, button {
    font-family: Inter_400;
  }
  p {
    font-size: 1rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
      font-size: 1.5rem;
  }
  button {
      cursor: pointer;
      border: 0;
  }
  a:link 
  { 
    text-decoration:none; 
    font-family: Inter_600;
    
  } 

`; 