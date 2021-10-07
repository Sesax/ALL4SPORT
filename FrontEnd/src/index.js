import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import Batiments from './components/Batiment.component';


ReactDOM.render(
  <BrowserRouter>
    <App />

    <Batiments />
  </BrowserRouter>,
  document.getElementById('root')
);