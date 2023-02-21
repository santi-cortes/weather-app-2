import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = ({ coords }) => {
  let { lat, long } = { ...coords };
  console.log(lat, long);
  return (
    //<Map center={`lat: ${coords.lat}, lng: ${coords.long} `} zoom={13}></Map>//
    <MapContainer className="map-view" center={[lat, long]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
