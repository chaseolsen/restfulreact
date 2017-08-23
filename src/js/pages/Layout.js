import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import ExternalFrame from '../components/ExternalFrame';
import Featured from './Featured';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      stockData: [],
      myData: []
    }
  }

  getStockData(){
    // example API Call
    $.ajax({
      // url: 'http://localhost:3000/api/helloworld',
      url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=nvda',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({stockData: data}, function(){
          console.log(this.state.stockData);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getTestData(){
    $.ajax({
      url: 'http://localhost:3000/api/helloworld',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({myData: data}, function(){
          console.log(this.state.myData);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }


  componentWillMount(){
    this.getStockData();
    this.getTestData();
    // this.getStockData();
  }
  componentDidMount(){
    // this.getStockData();
  }


  render() {
    return (
      <div>
        <Featured />
        <h1>- Stock Data Example</h1>
        <h2>{this.state.stockData.Name}</h2>
        <h3>Price: {this.state.stockData.LastPrice}</h3>
        <br></br>
        <h1>- Local server data Example</h1>
        <h2>{this.state.myData.message}</h2>

        <ExternalFrame />
      </div>
    )
  }
}
