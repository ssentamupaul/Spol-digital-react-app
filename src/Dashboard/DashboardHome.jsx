import React, { Component } from "react";

export default class DashboardHome extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="justify-content-center">
        <button>+</button>
        {this.state.count}
        <button>-</button>
      </div>
    );
  }
}
