var express = require('express');
const database = require('../config/database');

const app = express();

database.authenticate()
    .then(() => console.log('Connected to database'))

app.listen(3000, () => console.log('Express => Rdy'));