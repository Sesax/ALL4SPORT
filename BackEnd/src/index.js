var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../config/database');

let bat = require('./routes/batiment.routes.js')
const app = express();

db.database.sync().then(() => {
    console.log('look la db')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(cors())
app.use('/batiment', bat)
app.listen(3000, () => console.log('Express => Rdy'));