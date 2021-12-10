const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const connect = require('./db/db')
require('dotenv').config()



const routes = require('./routes/routes')

const app = express()
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// db
connect()

app.set('view engine', 'ejs');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    morgan(
     ':method :url :status :response-time ms'
    ))
app.use('/',routes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('listening on port '+PORT);
    console.log('http://localhost:4000/');
   });