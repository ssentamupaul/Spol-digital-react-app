import React, { Component } from 'react'

export default class Props extends Component {
    state = {

    }
  render() {
    console.log(this.props);
    //this.props.name = "Jamirah";
    return (
      <h1>Welcome back! {this.props.skills} {this.props.name}</h1>
    )
  }
}
