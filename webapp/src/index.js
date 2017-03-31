import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.js';
import leafletcss from './leaflet/leaflet.css';
import css from './stylesheet.css';

ReactDOM.render(
  <Map />,
  document.getElementById('app')
);


import { createMap } from './map.js';

//Values to be pulled from server later on
const lat = 37.9
const long = -96
const zoomLevel = 4

fetch('http://localhost:3000/data', {
  method: 'get'
}).then((response)=>{
   response.json().then((json) =>{
      console.log(json)
      createMap('map', json.features, [lat,long], zoomLevel)
  });
}).catch((response)=>{
  console.log(response)
  return {};
})
