import React, { Component } from 'react'
export default class Guest extends Component {
  state={
    guest: this.props.guest
  };
  render() {
    return (
      <div>
        <h1>Hello { this.state.guest.name}! {this.state.guest.salutation}</h1>
      </div>
    )
  }
}
