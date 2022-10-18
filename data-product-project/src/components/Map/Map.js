import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker.js';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles()
    const coords = { lat:34.665394, lng:135.432526 };
    const locations = [
        {  
        
          name: "Location 1",
          id:1,
          location: { 
            lat: 34.665394,
            lng: 135.432526 
          },
        },
        // {
        //   name: "Location 2",
        //   location: { 
        //     lat: 41.3917,
        //     lng: 2.1649
        //   },
        // },
        // {
        //   name: "Location 3",
        //   location: { 
        //     lat: 41.3773,
        //     lng: 2.1585
        //   },
        // },
        // {
        //   name: "Location 4",
        //   location: { 
        //     lat: 41.3797,
        //     lng: 2.1682
        //   },
        // },
        // {
        //   name: "Location 5",
        //   location: { 
        //     lat: 41.4055,
        //     lng: 2.1915
        //   },
        // }
      ];


    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}>

                {/* // options={'' }
                // onChange={''}
                //     (e) => {
                //   setCoords({ lat: e.center.lat, lng: e.center.lng });
                //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                // }
                //onChildClick={''} */}
                {locations.map(place => {
                    return(
    
                <Marker 
                id={place.id}
                text={place.name}
                lat={place.location.lat}
                lng={place.location.lng}/>)}
                )};
                {/* <Marker
                    lat={34.665394}
                    lng={135.432526}
                    text="My Marker"
                /> */}

            </GoogleMapReact>
        </ div>
    );
}
export default Map;