import React, { Component } from 'react';
import './SideNav.css';
import MenuOption from './MenuOption/MenuOption.js';

export default class SideNav extends Component {

  render(){
      return (
        <div className="sideNav">
          <div className="sideNavTitle">
            <i className="fa fa-database" aria-hidden="true"></i>
            <h3>Poke Dashboard</h3>
          </div>
          <div className="sideNavUser">
            <img id="userImg" src="http://placehold.it/50x50"/>
            <div id="sideNavUserWelcome">
              <span>Welcome,</span>
              <h3>John Doe</h3>
            </div>
          </div>
          <div className="sideMenu">
            <MenuOption name="Home" />
          </div>
        </div>
      )
    }
}
