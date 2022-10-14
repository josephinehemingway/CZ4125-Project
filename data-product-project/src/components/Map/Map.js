import React from 'react';
import GoogleMapReact from 'google-map-react';
//import useMediaQuery from '@material-ui/core/useMediaQuery'
// import LocationOnOutlinedIcon from '@matertial-ui/icons/LocationOutlinedIcon';

import useStyles from './styles';
// import { useMediaQuery } from '@material-ui/core';

const Map = () => {
    //const matches = useMediaQuerry('(min-width:600px')
    const classes = useStyles()
    const coords = { lat:0, lng:0 };

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={'' }
                onChange={''}
                //     (e) => {
                //   setCoords({ lat: e.center.lat, lng: e.center.lng });
                //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                // }
                onChildClick={''}
              >
            </GoogleMapReact>
        </ div>
    );
}
export default Map;