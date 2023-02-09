import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, {Marker, NavigationControl} from 'react-map-gl';
import React from 'react';
function Maps (){
    return (
         <Map className="position-absolute" mapLib={maplibregl} initialViewState={{longitude: 73.878849 , latitude: 18.517846, zoom: 16}} 
         style={{ borderRadius:"30px",width: "15rem", height: "15rem"}}
         mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zbj7mWZSXVFh5IFGR4e4">
        <NavigationControl position="top-left" />
        <Marker longitude={73.878849} latitude={18.517846} color="#0a1e7d"></Marker>
      </Map>
    );
  }
export default Maps;