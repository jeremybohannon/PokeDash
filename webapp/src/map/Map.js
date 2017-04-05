import React, { Component } from 'react';
import { createMap } from './createMap.js';
export default class Map extends Component {

  render() {
    return (
      <div ref={(map) => {this.mapDiv = map;}} style={{width: "100%" ,height: "100%"}}/>
    );
  }

  componentDidMount(){
    //Values to be pulled from server later on
    const lat = 37.9
    const long = -96
    const zoomLevel = 4

    fetch('http://localhost:3000/data', {
    }).then((response)=>{
       response.json().then((json) =>{
          createMap(this.mapDiv, json.features, [lat,long], zoomLevel)
      });
    }).catch((response)=>{
      console.log(response)
      return {};
    })
  }
}
