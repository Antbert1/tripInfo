import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, { Marker } from "react-map-gl";
import pin from '../assets/pin.png';
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pZGRsZXRvbjEiLCJhIjoiY2w1ZTJ1ejdnMHhiOTNjbnY2cWJiOWZ4NCJ9.PDNBhOJD0OD4eFFbFcBpew';

function MapDisplay() {
    const tripInfo = useSelector((state => state.dataReducer.tripInfo));

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-3.219407);
    const [lat, setLat] = useState(55.945848);
    const [zoom, setZoom] = useState(9);

    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });
    // });

    return (
        <Map
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={mapboxgl.accessToken}
            style={{ width: "98vw", height: "500px" }}
        >
            <Marker longitude={-100} latitude={40} anchor="bottom">
                <img src={pin} alt="map pin" />
            </Marker>
        </Map>
    )
}

export default MapDisplay;