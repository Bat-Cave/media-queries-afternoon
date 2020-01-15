import React, { Component } from 'react'

export default class Header extends Component {
  render(){
    return(
      <header>
        <a id='logo'>Start Bootstrap</a>
        <nav>
          <a>Services</a>
          <a>Portfolio</a>
          <a>About</a>
          <a>Team</a>
          <a>Contact</a>
        </nav>
      </header>
    )
  }
}