import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  h1, h2, section {
    margin-top: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: none;
    color: currentColor;
  }
  
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;


export default GlobalStyle;