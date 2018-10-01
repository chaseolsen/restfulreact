import React from 'react';

export default class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      currentTime: ''
    }
  }

  componentWillMount(){

  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        currentTime : new Date().toLocaleString()
      })
    }, 1000)
  }


  render() {
    return (
      <div>
      <h1>Login Page Test hey look a change</h1>
      <h2>Current time: {this.state.currentTime}</h2>
      </div>
    )
  };
}
