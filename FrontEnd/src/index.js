import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginIn from './LoginIn';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  <LoginIn />
  </BrowserRouter>,
  document.getElementById('root')
);