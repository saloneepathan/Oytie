import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, {Marker, NavigationControl} from 'react-map-gl';
import React from 'react';
function Maps (){
    return (
         <Map mapLib={maplibregl} initialViewState={{longitude: 73.878849 , latitude: 18.517846, zoom: 17}} 
         style={{ resize: "both" , width: "100%", height: " calc(100vh - 97px)"}}
         mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zbj7mWZSXVFh5IFGR4e4">
        <NavigationControl position="top-left" />
        <Marker longitude={73.878849} latitude={18.517846} color="black"></Marker>
      </Map>
    );
  }
  // style={{width: "100%", height: " calc(100vh - 77px)"}}
export default Maps;