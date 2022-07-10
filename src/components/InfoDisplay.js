import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';


function InfoDisplay(props) {

    const icons = {
        'Route Number': faSquare,
        'Bikes': faBicycle,
        'Onboard Toilet': faPerson,
        'Wifi': faWifi,
        'Wheelchair': faWheelchair,
        'Plate': faIdCard
    };

    return (
        <div className="infoBox">
            <div className="infoIconBox">
                <FontAwesomeIcon icon={icons[props.title]} className="infoIcon" />
            </div>
            <div className="infoInfo">
                <div className="infoTitle">{props.title}</div>
                <div className="infoValue">{props.value}</div>
            </div>
        </div>
    )
}

export default InfoDisplay;