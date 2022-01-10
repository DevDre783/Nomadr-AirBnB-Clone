// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css';

function Home() {

    return (
        <div className='splash-image-container'>
            <img className='the-image' src="https://www.worldphoto.org/sites/default/files/default-media/Mountain%20Road%20Aerial%20-%20%C2%A9%20Manish%20Mamtani.jpg"></img>
            <div className='banner'>
                <div className='banner__info'>
                    <h3 className='banner-msg'>Nomadr why. Nomadr where. There's a Van out there.</h3>
                </div>
            </div>
            <div className='site-name'>Nomadr.</div>
        </div>
    );
}

export default Home;
