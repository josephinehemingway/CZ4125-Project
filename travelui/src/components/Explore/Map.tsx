/*global google*/
import React, {useEffect, useRef, useState} from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from './mapStyles';

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

interface AttractionsInterface{
    Name: string,
    Activity: string,
    Location: string,
    ImageUrl: string,
    Ratings: string,
    Review_url: string;
    Lat: number,
    Lon: number
}

interface FoodInterface{
    Name: string,
    Description: string,
    Address: string,
    Image: string,
    Rating: string,
    RestaurantAwardPoint: string;
    Dishes: string;
    MustTry: boolean;
    Lat: number,
    Lon: number
}

interface AccommodationsInterface{
    Name: string,
    ImageUrl: string,
    ReviewUrl: string,
    Rating: number,
    Lat: number,
    Lon: number
}

interface centerInterface{
    lat: number,
    lng: number
}

type Props = {
    destinationName: string;
    locations: AttractionsInterface[] | FoodInterface[] | AccommodationsInterface[]
    mapWidth?: string;
}

const Map: React.FC<Props> = ({destinationName, locations, mapWidth}) => {
    const [center, setCenter] = useState<centerInterface>({lat: 48.864716, lng: 2.349014})
    const [window, setWindow] = useState<Boolean>(false)

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

    return (
        <GoogleMap
            mapContainerStyle={{
                width: mapWidth ? mapWidth : '400px',
                height: '836px'
            }}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options = {options as google.maps.MapOptions}
        >
            {locations?.map(marker => (
                <Marker
                    onMouseOver={() => {setWindow(true)}}
                    onMouseOut={() => {setWindow(false)}}
                    position={{
                        lat: Number(marker.Lat),
                        lng: Number(marker.Lon)
                }}
                >
                {window && (
                    <InfoWindow>
                        <h4>{marker.Name}</h4>
                    </InfoWindow>
                )}
                </Marker>
            ))}
        </GoogleMap>
    )
}

export default Map