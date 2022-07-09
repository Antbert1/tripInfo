import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTripInfo } from '../redux/actions';
import Header from './Header';
import Map from './Map';
import { getTripInfo } from '../util';
const preUrl = 'https://api.ember.to/';

function Root() {
    const dispatch = useDispatch();
    const tripInfo = useSelector((state => state.dataReducer.tripInfo));

    const [error, setError] = useState("sadfsdf");

    useEffect(() => {
        getTripInfo(preUrl, "hybD6XS9GbdvFuH5PyXdmv").then(function (result) {
            if (result !== "Error") {
                dispatch(setTripInfo(result));
            } else {
                setError("There was a problem retrieving your data. Please try again.")
            }
            console.log(result);
        });
    }, []);


    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="pageTitle">
                        Your Trip
                    </div>
                    {error !== "" &&
                        <div className="errorMsg">{error}</div>
                    }
                </div>
            </div>
            {Object.keys(tripInfo).length > 0 ?
                <Map />
                :
                <div>Loading</div>
            }
        </div>
    )
}

export default Root;
