import React, { Component } from 'react'
import './DashBoard.css'
import LargeCard from './LargeCard/LargeCard.js'
import Map from '../Map/Map.js'

export default class DashBoard extends Component {

  render(){
      return (
        <div className="dashBoard">
          <LargeCard title="Map">
            <Map/>
          </LargeCard>
        </div>
      )
    }
}
