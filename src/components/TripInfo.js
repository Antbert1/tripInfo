import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { setTripInfo, setError } from '../redux/actions';
import { getTripInfo } from '../util';
import InfoDisplay from './InfoDisplay';
const preUrl = 'https://api.ember.to/';

function TripInfo() {
    const dispatch = useDispatch();
    const tripInfo = useSelector((state => state.dataReducer.tripInfo));

    const [loading, setLoading] = useState(false);

    //Information to show
    const notes = tripInfo.description.notes;
    let updatedAt;
    if (notes !== undefined) {
        updatedAt = tripInfo.description.notes_details.updated_at.toString();
    }
    const dateString = new Date(updatedAt);
    const routeNum = tripInfo.description.route_number;
    let bikes;
    if (tripInfo.vehicle.bicycle === 1) {
        bikes = "1 bike allowed";
    } else {
        bikes = tripInfo.vehicle.bicycle + " bikes allowed"
    }
    const toilet = tripInfo.vehicle.has_toilet ? "This bus has a toilet" : "This bus has no toilet";
    const wifi = tripInfo.vehicle.has_wifi ? "This bus has wifi" : "This bus has no wifi";
    let wheelchair;
    if (tripInfo.vehicle.wheelchair === 1) {
        wheelchair = "1 wheelchair allowed";
    } else {
        wheelchair = tripInfo.vehicle.wheelchair + " wheelchairs allowed"
    }
    const plate = tripInfo.vehicle.plate_number;

    const refreshInfo = () => {
        setLoading(true);
        getTripInfo(preUrl, "hybD6XS9GbdvFuH5PyXdmv").then(function (result) {
            setLoading(false);
            if (result !== "Error") {
                dispatch(setTripInfo(result));
            } else {
                dispatch(setError("There was a problem retrieving your data. Please try again."));
            }
        });
    }

    return (
        <div className="tripInfo container">
            {notes !== undefined &&
                <div>
                    <div className="lastUpdated">
                        <span className="refreshIcon">
                            {loading ?
                                <div className="loader tinyLoader"></div>
                                :
                                <FontAwesomeIcon icon={faRefresh} onClick={() => refreshInfo()} />
                            }
                        </span>
                        Last Updated: {dateString.toString()}
                    </div>
                    <div className="notesOuter">
                        <div className="notes">
                            {notes}
                        </div>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col-md-4">
                    <InfoDisplay title="Route Number" value={routeNum} />
                </div>
                <div className="col-md-4">
                    <InfoDisplay title="Bikes" value={bikes} />
                </div>
                <div className="col-md-4">
                    <InfoDisplay title="Onboard Toilet" value={toilet} />
                </div>
            </div>
            <div className="row infoSecondRow">
                <div className="col-md-4">
                    <InfoDisplay title="Wifi" value={wifi} />
                </div>
                <div className="col-md-4">
                    <InfoDisplay title="Wheelchair" value={wheelchair} />
                </div>
                <div className="col-md-4">
                    <InfoDisplay title="Plate" value={plate} />
                </div>
            </div>
        </div>
    )
}

export default TripInfo;