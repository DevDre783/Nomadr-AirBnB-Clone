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
        <div className="container">
            <div className="left__container">
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
            </div>

            <div className="right__container">
                <img className="googleMap__image" src={'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80'}></img>
            </div>
        </div>
    )
}


export default VanListings;
