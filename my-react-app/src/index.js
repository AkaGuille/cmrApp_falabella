import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginP from './pages/LoginP';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import TestC from './pages/TestC';
import Logger from './pages/Logger';

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
  rel="stylesheet"
/>


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
