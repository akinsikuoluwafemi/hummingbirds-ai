import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${}  
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