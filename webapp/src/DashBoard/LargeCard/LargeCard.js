import React, { Component } from 'react';
import './LargeCard.css';
export default class DashBoard extends Component {

  render(){
      return (
        <div className="LargeCard">
          <div className="cardTitle">
            <h2>Title</h2>
          </div>
          <div className="cardContent">
            test
          </div>
        </div>
      )
    }
  }
