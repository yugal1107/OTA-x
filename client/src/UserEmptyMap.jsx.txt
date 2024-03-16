import React from "react";
import { MapContainer, TileLayer, useMap , Marker , Popup } from 'react-leaflet'
// import './index.css'

function Emptymap(){

    return (
      <>
      <MapContainer
        id="map"
        center={[12.847490174091313, 80.15239393065423]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      </>
    );
}

export default Emptymap;