import React from 'react';
import GoogleMapReact from 'google-map-react';

import mapStyles from './mapStyles';
import useStyles from './styles';

const Map = () => {
    const coords = { lat: 34.665394, lng: 135.432526}
    // const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const address = "Universal Studios Singapore";

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s`)
    .then((response) => {
        return response.json();
    }).then(jsonData => {
        console.log(jsonData.results[0].geometry.location);
    })
    .catch(error => {
        console.log(error);
    })

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s' }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                // onChange={(e) => {
                //     setCoords({ lat: e.center.lat, lng: e.center.lng });
                //     setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                // }}
                // onChildClick={(child) => setChildClicked(child)}
            >
                {/*{places.length && places.map((place, i) => (*/}
                {/*    <div*/}
                {/*        className={classes.markerContainer}*/}
                {/*        lat={Number(place.latitude)}*/}
                {/*        lng={Number(place.longitude)}*/}
                {/*        key={i}*/}
                {/*    >*/}
                {/*        {!matches*/}
                {/*            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />*/}
                {/*            : (*/}
                {/*                <Paper elevation={3} className={classes.paper}>*/}
                {/*                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>*/}
                {/*                    <img*/}
                {/*                        className={classes.pointer}*/}
                {/*                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}*/}
                {/*                    />*/}
                {/*                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />*/}
                {/*                </Paper>*/}
                {/*            )}*/}
                {/*    </div>*/}
                {/*))}*/}
                {/*{weatherData?.list?.length && weatherData.list.map((data, i) => (*/}
                {/*    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>*/}
                {/*        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />*/}
                {/*    </div>*/}
                {/*))}*/}
            </GoogleMapReact>
        </div>
    );
};

export default Map;