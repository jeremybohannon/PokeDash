import React, { Component } from 'react';
import { createMap } from './createMap.js';
import './Map.css';

export default class Map extends Component {

  render() {
    return (
      <div ref={(map) => {this.mapDiv = map;}} className='map'/>
    );
  }

  componentDidMount(){
    //Values to be pulled from server later on
    const lat = 37.9
    const long = -96
    const zoomLevel = 4

    fetch('http://localhost:3000/data', {
    })
    .then((response) => response.json())
    .then((data) => {
      createMap(this.mapDiv, data.features, [lat,long], zoomLevel)
    }).catch((response)=>{
      console.error(response)
      return {};
    })
  }
}
