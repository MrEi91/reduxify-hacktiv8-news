import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css';
import PeopleList from './PeopleList'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peoples:[]
    }
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hacktiv8 News
        </p>

        <nav>
          <Link to="/News">News</Link>&nbsp;&nbsp;
          <Link to="/People">People</Link>
        </nav>

        <PeopleList />
      </div>
    )
  }
}

export default People
