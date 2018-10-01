import React from 'react';
import {Link} from 'react-router';
import StockChart from '../components/StockChart';

export default class Chart extends React.Component {


  componentDidMount() {
    var currentLocation = this.props.location.pathname;
    console.log('Location:', currentLocation);
  }

  render() {
    return (
      <div>
        <Link to='login'>
        <button>Login Page</button>
        </Link>
      <h1>Chart page</h1>
      <StockChart />
      </div>
    )
  };
}
