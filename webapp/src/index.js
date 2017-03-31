import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.js';
import leafletcss from './leaflet/leaflet.css';
import css from './stylesheet.css';

ReactDOM.render(
  <Map />,
  document.getElementById('app')
);
