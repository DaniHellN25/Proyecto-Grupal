import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { BsGeoAltFill } from "react-icons/bs";
import { Stack } from '@chakra-ui/react';

const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env;

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${REACT_APP_GOOGLE_MAP_API_KEY}`
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Stack direction='column' align='center'>

      <GoogleMap
        mapContainerStyle={{ width: '25em', height: '25em' }}
        center={center}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ gestureHandling: "greedy" }}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <Marker position={center} title='Tu psicólogo' />
      </GoogleMap>

      <button onClick={() => map.panTo(center)}>
        <BsGeoAltFill width='1.5em' color='red' />
      </button>

    </Stack>
  ) : <></>
}

export default React.memo(Map)