import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2 mb-3" type="search" onChange={(e) => this.props.onFilter(e.target.value)} placeholder="Search"/> 
      <button className="btn btn-outline-success mb-3" type="submit">Search</button>
    </form>
  </div>
      </div>
    )
  }
}
