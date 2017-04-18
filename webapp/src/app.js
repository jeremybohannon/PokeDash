import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './DashBoard/DashBoard.js';
import SideNav from './SideNav/SideNav.js'
import 'leaflet/dist/leaflet.css';
import css from './stylesheet.css';

export default class App extends Component {
  render() {
    return (
      <div id="app-wrapper">
        <SideNav />
        <DashBoard />
      </div>
    )
  }
}