import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVans } from "../../store/vans";
import { Link } from 'react-router-dom';
import './VanListings.css';

function VanListings() {
    const dispatch = useDispatch();
    const allVans = useSelector(state => state.vans.listOfVans);
    console.log(allVans);

    useEffect(() => {
        dispatch(getAllVans());
    },[]);

    return (
        <div>
            <h1 className="listings__header">Vans Nearby</h1>
            {allVans?.map(van => (
                <div className='listing__info'>
                    <div className='vanImage'>
                        <Link key={`${van.id}1`} id='vanImgLink' className="vanImage" to={`/vans/${van.id}`}>
                            <img id="vanId" key={`${van.id}2`} src={van?.Images[0]?.url}></img>
                        </Link>
                        <div className='van__info'>
                            <h2 key={`${van.id}3`}>{van.title}</h2>
                            <p key={`${van.id}4`}>Vehicle Capacity: {van.totalPassengers} passengers</p>
                            <h3>Location:</h3>
                            <h3 key={`${van.id}5`} className='location-text'>{`${van.city}, ${van.state}`}</h3>
                            <h2 key={`${van.id}6`} className='price-text'>{`$${van.costPerNight} / night`}</h2>
                        </div>
                    </div>
                </div>
            ))}
            <div className="map__container">
                <img className="googleMap__image" src={'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg'}></img>
            </div>
        </div>
    )
}


export default VanListings;
