import React from 'react';

export default class Featured extends React.Component {
  render() {
    return (
      <h1>Featured page, hello {this.props.myName}</h1>
    )
  };
}
