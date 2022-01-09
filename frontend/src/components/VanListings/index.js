import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVans } from "../../store/vans";
import './VanListings.css';

function VanListings() {
    const dispatch = useDispatch();
    const allVans = useSelector(state => state.vans.listOfVans);

    useEffect(() => {
        dispatch(getAllVans());
    },[]);

    return (
        <div>
            <h1 className="listings-title">Vans Listings</h1>
            {allVans.map(van => (
                <div className='vanImages'>
                    <div className='vanImage' >
                        <img key={van.id} src={van.Images[0].url}></img>
                    </div>
                    <div className='location-price'>
                        <h3 className='location-text'>{`${van.city}, ${van.state}`}</h3>
                        <h2 className='price-text'>{`$${van.costPerNight} / night`}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default VanListings;
