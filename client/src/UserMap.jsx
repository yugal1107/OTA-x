import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [40, 40],
});

const UserMap = (props) => {
  const mapRef = useRef(null);
  const coordinate = [props.coordinates[1], props.coordinates[0]];

  useEffect(() => {
    const fly = () => {
      if (mapRef.current) {
        mapRef.current.flyTo(coordinate, 13, { animate: true });
      }
    };
    fly();
  }, [coordinate]);

  return (
    <>
      <MapContainer
        center={coordinate}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinate} icon={customIcon}>
          <Popup>Driver Location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default UserMap;
