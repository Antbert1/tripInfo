import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, { Marker } from "react-map-gl";
import pin from '../assets/pin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pZGRsZXRvbjEiLCJhIjoiY2w1ZTJ1ejdnMHhiOTNjbnY2cWJiOWZ4NCJ9.PDNBhOJD0OD4eFFbFcBpew';

function MapDisplay() {
    const tripInfo = useSelector((state => state.dataReducer.tripInfo));
    const midPoint = tripInfo.route[Math.round(tripInfo.route.length / 2)];
    const midLat = midPoint.location.lat;
    const midLon = midPoint.location.lon;

    const [showInfo, setShowInfo] = useState(false);
    const [stopInfo, setStopInfo] = useState({
        'name': '',
        'actual': '',
        'estimated': '',
        'scheduled': '',
        'allowBoarding': false,
        'allowDropoff': false
    });

    const showPopup = (item) => {
        const actual = new Date(item.arrival.actual);
        const estimated = new Date(item.arrival.estimated);
        const scheduled = new Date(item.arrival.scheduled);
        setStopInfo({
            'name': item.location.name,
            'actual': actual.toString(),
            'estimated': estimated.toString(),
            'scheduled': scheduled.toString(),
            'allowBoarding': false ? "No" : "Yes",
            'allowDropoff': false ? "No" : "Yes"
        })
        setShowInfo(true);
    }

    const showMarker = (item, index) => {
        return (
            <Marker longitude={item.location.lon} latitude={item.location.lat} anchor="bottom" key={index}>
                <img src={pin} alt="map pin" onClick={() => showPopup(item)} />
            </Marker>
        )
    }

    const infoModal = () => {
        return (
            <div className="modalContainer">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <div className="infoTitle">{stopInfo.name}</div>
                            <FontAwesomeIcon className="closeIcon" icon={faClose} onClick={() => setShowInfo(false)} />
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="modalBody">
                            <div className="stopInfo">
                                <div className="infoTitle">Scheduled Time</div>
                                <div>{stopInfo.scheduled}</div>
                            </div>
                            <div className="stopInfo">
                                <div className="infoTitle">Estimated Time</div>
                                <div>{stopInfo.estimated}</div>
                            </div>
                            <div className="stopInfo">
                                <div className="infoTitle">Actual Time</div>
                                <div>{stopInfo.actual}</div>
                            </div>
                            <div className="stopInfo">
                                <div className="infoTitle">Allow Boarding</div>
                                <div>{stopInfo.allowBoarding}</div>
                            </div>
                            <div className="stopInfo">
                                <div className="infoTitle">Allow Dropoff</div>
                                <div>{stopInfo.allowDropoff}</div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }

    return (
        <div>
            {showInfo && infoModal()}
            <Map
                initialViewState={{
                    longitude: midLon,
                    latitude: midLat,
                    zoom: 7,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={mapboxgl.accessToken}
                style={{ width: "98vw", height: "500px" }}
            >
                {tripInfo.route.map((item, index) => showMarker(item, index))}
            </Map>
        </div>

    )
}

export default MapDisplay;