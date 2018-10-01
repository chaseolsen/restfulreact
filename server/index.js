//  Bash Commands
// nodemon server (Hosts local server and reload changes)
// webpack --w (Runs webpack to transpile js code to client.min.js)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./router');
// const config = require('../config.js');

const controller = require('./controllers/testcontroller.js');

var app = express();

app.use(cors());

// Enabling CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router(app);

// POSSIBLE CORS FIX FOR SERVER API CALLS
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })

app.get('/testcall', controller.test);

app.use(express.static(__dirname + './../src'));

// Controllers
const serverCtrl = require('./controllers/serverCtrl');

app.listen(3000, function(){
  console.log('listening on 3000');
})
