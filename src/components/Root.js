import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTripInfo, setError } from '../redux/actions';
import Header from './Header';
import MapDisplay from './MapDisplay';
import TripInfo from './TripInfo';
import { getTripInfo } from '../util';
const preUrl = 'https://api.ember.to/';

function Root() {
    const dispatch = useDispatch();
    const tripInfo = useSelector((state => state.dataReducer.tripInfo));
    const error = useSelector((state => state.dataReducer.error));

    useEffect(() => {
        getTripInfo(preUrl, "hybD6XS9GbdvFuH5PyXdmv").then(function (result) {
            if (result !== "Error") {
                dispatch(setTripInfo(result));
            } else {
                dispatch(setError("There was a problem retrieving your data. Please try again."));
            }
            console.log(result);
        });
    }, []);


    return (
        <div className="container-fluid">
            <Header />
            {Object.keys(tripInfo).length > 0 ?
                <div className="pageContent">
                    <MapDisplay />
                    <div className="container">
                        <div className="row">
                            <div className="pageTitle">
                                Your Trip Information
                            </div>
                            {error !== "" &&
                                <div className="notesOuter">
                                    <div className="notes">
                                        {error}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <TripInfo />
                </div>
                :
                <div>Loading</div>
            }
        </div>
    )
}

export default Root;
