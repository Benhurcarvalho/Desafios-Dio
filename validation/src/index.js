import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

import {GlobalStyle} from './global';

// const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
// root.render(
//   <React.StrictMode>
//     <GlobalStyle />
//     <App />
//   <React.StrictMode/>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);