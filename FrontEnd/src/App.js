import {Button, Grid} from '@mui/material'
import React from 'react';
import {} from 'react-dom'
import axios from 'axios';  
function App() {
  let data = []
  axios.get('http://localhost:3000/batiment/see').then((res) => {
    data.push(res);
  })
  return (
    <Grid>
      <h1>{data}</h1>
    </Grid>
    );
}

export default App;