import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ContextProvider>
    <App />
    </ContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
