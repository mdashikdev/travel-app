import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius:'20px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map(){

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCf6B3WFjPar7xLmuOaGReUJD1RwabJVzw"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          fullscreenControl:false,
          zoomControl:false
        }}
      >
      </GoogleMap>
    </LoadScript>
  );
}