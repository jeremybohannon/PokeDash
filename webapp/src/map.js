import L from 'leaflet'
import {scaleQuantize} from 'd3-scale'

export function createMap(anchorElem, mapData, latlong, zoomLevel) {
    //Find the minimum and maximum values of Map Data to use in our domain scale
    let minimumDensity = Infinity
    let maximumDensity = -Infinity
    mapData.forEach(feature => {
        if (feature.properties.density) {
            let temp = feature.properties.density
            if (temp < minimumDensity) minimumDensity = temp
            if (temp > maximumDensity) maximumDensity = temp
        }
    })

    const scaler = scale(minimumDensity, maximumDensity)

    //Returns fill color for each state based on density. Default value is transparent
    function getColor(density = 0) {
        if (density === 0) return '#fff0'
        return scaler(density)
    }

    //Controls the styling of state fill color and outlines
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: '#FFF',
            fillOpacity: 0.7
        }
    }

    function highlightFeature(e) {
        let layer = e.target

        layer.setStyle({
            weight: 5,
            color: 'grey',
            dashArray: '',
            fillOpacity: 0.7
        })

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront()
        }
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target)
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds())
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        })
    }

    const blank = L.tileLayer('')

    const greyscale = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy  <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })

    const stateOutlines = L.geoJson(mapData, {style: {
        weight: 4,
        color: '#FFF',
        dashArray: '',
        fillOpacity: 0.0
    }})

    const geojson = L.geoJson(mapData, {
        style: style,
        onEachFeature: onEachFeature
    })

    let baseMaps = {
        "Blank" : blank,
        "Greyscale" : greyscale
    }

    let overlayMaps = {
        "State Outlines" : stateOutlines,
        "GeoJson" : geojson
    }

    function addToggleLayer(maps, label, tileLayer){
        maps[label] = tileLayer
    }

    let map = L.map(anchorElem, {
        zoomControl: true,
        scrollWheelZoom: true,
        layers: [greyscale, stateOutlines, geojson]
    }).setView([latlong[0], latlong[1]], zoomLevel)

    // TODO
    //Fix layer order persistence
    L.control.layers(baseMaps, overlayMaps).addTo(map)

    return L;
}

function scale(minimum, maximum, scaleFactor=0.03){
    //Create d3-scale with our domain and range
    return scaleQuantize()
        .domain([minimum, maximum * scaleFactor])
        .range(['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026']);
}
