import React, { Component } from 'react';
import './MenuOption.css';

export default class MenuOption extends Component {

  render(){
      let icon;

      if (this.props.name === "Home") {
        icon = 'fa-home'
      }
      
      return (
        <a className="sideNavOption">
          <i className={`fa ${icon}`} aria-hidden="true"></i>
          <span>{this.props.name}</span>
          <span className="fa fa-chevron-down" aria-hidden="true"></span>
        </a>
      )
  }
}
