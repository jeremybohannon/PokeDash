import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map/Map.js';
import leafletcss from '../node_modules/leaflet/dist/leaflet.css';
import css from './stylesheet.css';

ReactDOM.render(
  <Map/>,
  document.getElementById('app')
);
