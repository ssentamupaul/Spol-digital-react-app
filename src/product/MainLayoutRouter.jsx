import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ecommerce/Navbar";
export default class MainLayoutRouter extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}
