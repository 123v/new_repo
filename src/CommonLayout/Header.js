import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor()
  {
    super();
    this.state = {
      a:'',
    }
  }

  componentWillMount=()=>{
    console.log("inside componentWillMount");
  }

  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="header-container">
        <div className="logo-container"><div className="logo-content"></div></div>
      </div>
    );
  }
}

export default Header;
