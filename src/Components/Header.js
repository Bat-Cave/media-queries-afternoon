import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDropdown: false,
      mobileClass: 'none'
    }
  }

  toggleDropdown = () => {
    this.state.mobileClass === 'mobile-drop-open' ? this.setState({mobileClass: 'mobile-drop-compressed'}) : this.setState({mobileClass: 'mobile-drop-open'})
  }

  render(){
    return(
      <header>
        <a id='logo'>Start Bootstrap</a>
        <nav id='desktop-nav'>
          <a href='#services'>Services</a>
          <a href='#'>Portfolio</a>
          <a href='#'>About</a>
          <a href='#'>Team</a>
          <a href='#'>Contact</a>
        </nav>
        <nav id='mobile-nav' onClick={this.toggleDropdown}>
          Menu <i class="fas fa-bars"></i>
        </nav>
        <div id={this.state.mobileClass}>
          <a href='#services'>Services</a>
          <a href='#'>Portfolio</a>
          <a href='#'>About</a>
          <a href='#'>Team</a>
          <a href='#'>Contact</a>
        </div>
      </header>
    )
  }
}