import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map/Map.js';
import 'leaflet/dist/leaflet.css';
import css from './stylesheet.css';

ReactDOM.render(
  <Map/>,
  document.getElementById('app')
);
