import React from 'react';
import logo from '../assets/logo.PNG';

function Header() {

    return (
        <div className="container headerContainer">
            <img src={logo} alt="Ember company logo" />
        </div>
    )
}

export default Header;