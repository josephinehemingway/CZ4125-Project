/*global google*/
import React, {useEffect, useRef, useState} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
    width: '400px',
    height: '836px'
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

interface LocationInterface{
    Name: string,
    Activity: string,
    Location: string,
    ImageUrl: string,
    Ratings: string,
    Review_url: string;
    Lat: number,
    Lon: number
}

interface centerInterface{
    lat: number,
    lng: number
}

type Props = {
    destinationName: string;
    locations: LocationInterface[]
}

const Map: React.FC<Props> = ({destinationName, locations}) => {
    const [center, setCenter] = useState<centerInterface>({lat: 48.864716, lng: 2.349014})
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s"
    })

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destinationName}&key=AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s`)
            .then((response) => {
                return response.json();
            }).then(jsonData => {
            console.log(jsonData.results[0].geometry.location);
            setCenter(jsonData.results[0].geometry.location)
        })
            .catch(error => {
                console.log(error);
            })
    }, [destinationName])

    const mapRef = useRef<google.maps.Map | null>(null)
    const onLoad = (map: google.maps.Map): void => {
        mapRef.current = map;
    }

    const onUnmount = (): void => {
        mapRef.current = null;
    }

    if (!isLoaded) return <div> Map Loading... </div>

    const onMarkerClick = (marker: LocationInterface) => {
        console.log(marker)
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options = {options as google.maps.MapOptions}
        >
            {locations?.map(marker => (
                <Marker
                    onClick={() => onMarkerClick(marker)}
                    position={{
                        lat: Number(marker.Lat),
                        lng: Number(marker.Lon)
                }}
                />
            ))}
        </GoogleMap>
    )
}

export default Map