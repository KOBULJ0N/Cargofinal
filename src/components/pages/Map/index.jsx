import React from 'react';
// import GoogleMaps from 'simple-react-google-maps';
import { Container, Title } from './style';


import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '80%',
  height: '700px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapForm = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDFrQDIPDQX2cU9xck7bVRzYgXMbPT46lM"
  })

  return (
    <Container id='block6'>
      <Title>GET A QUOTE</Title>

      {isLoaded && (<GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>)}
     
    </Container>
  );
};

export default MapForm;
