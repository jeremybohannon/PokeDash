import React, { Component } from 'react';
import './LargeCard.css';

export default class DashBoard extends Component {

  render(){
      return (
        <div className="LargeCard">
          <div className="cardTitle">
            <h2>{this.props.title}</h2>
          </div>
          <div className="cardContent">
            <this.props.content/>
          </div>
        </div>
      )
    }
  }
