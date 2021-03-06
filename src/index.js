import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './pages/landing-page/landing-page';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './shared/styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
