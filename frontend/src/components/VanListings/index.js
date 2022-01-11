import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVans } from "../../store/vans";
import { Link } from 'react-router-dom';
import './VanListings.css';

function VanListings() {
    const dispatch = useDispatch();
    const allVans = useSelector(state => state.vans.listOfVans);

    useEffect(() => {
        dispatch(getAllVans());
    },[]);

    return (
        <div>
            <h1 className="listings__header">Vans Nearby</h1>
            {allVans.map(van => (
                <div className='listing__info'>
                    <div className='vanImage'>
                        {/* <Link id='vanImgLink' className="vanImage" to={`/vans/${van.id}`}>
                            <img id="vanId" key={van.id} src={van.Images[0].url}></img>
                        </Link> */}
                        <div className='van__info'>
                            <h2>{van.title}</h2>
                            <p>Vehicle Capacity: {van.totalPassengers} passengers</p>
                            <h3>Location:</h3>
                            <h3 className='location-text'>{`${van.city}, ${van.state}`}</h3>
                            <h2 className='price-text'>{`$${van.costPerNight} / night`}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default VanListings;
