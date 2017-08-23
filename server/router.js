const express = require('express');
const _ourController = require('./controllers/serverCtrl');

module.exports = function(app){
  const apiRoutes = express.Router();

  //routes will go here
  app.use('/api', apiRoutes);

  apiRoutes.get('/helloworld', _ourController.helloworld);
  apiRoutes.get('/getgreetings', _ourController.getgreetings);
  // ex GET: http://localhost:3000/api/helloworld

}
