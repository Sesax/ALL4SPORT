import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Batiments from './components/Batiment.component';


ReactDOM.render(
  <BrowserRouter>
  <Batiments/>
  </BrowserRouter>,
  document.getElementById('root')
);