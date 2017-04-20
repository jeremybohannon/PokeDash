import React, { Component } from 'react';
import './MenuOption.css';

export default class MenuOption extends Component {

  render(){
      let icon;

      if (this.props.name === "Home") {
        icon = 'fa-home'
      } else if(this.props.name === "Data"){
        icon = 'fa-table'
      }

      return (
        <a href="#" className="sideNavOption">
          <i className={`fa ${icon}`} aria-hidden="true"></i>
          <span>{this.props.name}</span>
          <span className="fa fa-chevron-down" aria-hidden="true"></span>
        </a>
      )
  }
}
