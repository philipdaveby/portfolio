import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
