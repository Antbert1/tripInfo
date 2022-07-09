import React from 'react';
import Header from './Header';
import Map from './Map';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoading } from '../redux/actions';

function Root() {
    // const dispatch = useDispatch();
    // const loading = useSelector((state => state.dataReducer.loading));


    return (
        <div className="container-fluid">
            <Header />
            <Map />
        </div>
    )
}

export default Root;
