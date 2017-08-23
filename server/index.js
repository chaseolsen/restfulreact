//  Bash Commands
// nodemon server
// webpack --w

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./router');
// const config = require('../config.js');
var app = express();

// Enabling CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router(app);

app.use(express.static(__dirname + './../src'));


// Controllers
const serverCtrl = require('./controllers/serverCtrl');






app.listen(3000, function(){
  console.log('listening on 3000');
})
