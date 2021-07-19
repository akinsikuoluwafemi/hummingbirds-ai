import { createGlobalStyle } from 'styled-components';
import {} from 'styled-no'
export const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    background: #fff;
    overscroll-behavior: none;
    overflow-x: hidden;
  }


`;