import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );