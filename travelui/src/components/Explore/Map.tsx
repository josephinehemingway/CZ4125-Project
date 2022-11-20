/*global google*/
import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
    width: '400px',
    height: '836px'
};

const center = {
    lat: 34.665394,
    lng: 135.432526
};

export const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: mapStyles
}

export type MarkerType = {
    id: string;
    location: google.maps.LatLngLiteral;
    name: string;
    url: string;
}

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s"
    })

    const mapRef = useRef<google.maps.Map | null>(null)
    const onLoad = (map: google.maps.Map): void => {
        mapRef.current = map;
    }

    const onUnmount = (): void => {
        mapRef.current = null;
    }

    if (!isLoaded) return <div> Map Loading... </div>

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options = {options as google.maps.MapOptions}
        >
            <Marker position={{ lat: 34.665394, lng: 135.432526}}>

            </Marker>
        </GoogleMap>
    )
}

export default Map