import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

 const GlobalStyle = createGlobalStyle`
${normalize}
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
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
    z-index: 
  }


`;


const darkTheme = {
  background: '#000',
  text: '#fff'
}

const lightTheme = {
  background: '#fff',
  text: '#000'
}

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
