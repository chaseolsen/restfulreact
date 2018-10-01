var app = require('../index.js');
var request = require('request-promise');
var q = require('q');

module.exports = {
  test: function(req, res, next) {
    // console.log(req.query.search);

    var stockData = {}, name;
    var deferred = q;

    // Symbol Lookup http://dev.markitondemand.com/Api/v2/Lookup/json?input=
    // Stock Lookup http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=

    request({
        method: 'GET',
        url: 'http://dev.markitondemand.com/Api/v2/Lookup/json?input=' + req.query.search
    }).then(function(result){
      console.log(JSON.parse(result)[0].Symbol);
      console.log('<<<<END>>>>')
      stockData.Symbol = JSON.parse(result)[0].Symbol;

      request({
        method: 'GET',
        url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + stockData.Symbol
      }).then(function(data){

        console.log(JSON.parse(data));

        var allData = JSON.parse(data);

        stockData.Name = allData.Name;
        stockData.Price = allData.LastPrice;
        stockData.High = allData.High;
        stockData.Low = allData.Low;
        stockData.Change = allData.Change;
        stockData.Open = allData.Open;
        stockData.Timestamp = allData.Timestamp;


        console.log(stockData);

        deferred.resolve(stockData);
        res.send(stockData);

      })

    })



  }
}
