import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAllBookings } from "../../store/booking";


function BookingsPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const allVans = useSelector(state => state.vans.listOfVans);

    const userId = sessionUser.id
    console.log("THE ID", userId)
    const allBookings = Object.values(useSelector(state => state.bookings))
    console.log("ALL BOOKINGS", allBookings)

    useEffect(() => {
        dispatch(getAllBookings(allBookings))
    }, [])

    return (
        <div>
            <h1 style={{marginTop: "10%", marginLeft: "15%", textDecoration: "underline"}}>My Bookings:</h1>
            {allBookings.map(booking => (
                <>
                    {userId === booking.userId &&
                        <>
                            {/* <h1 key={booking.id} style={{marginTop: "10%", marginLeft: "20%"}}>{booking.startDate} ......TO...... {booking.endDate}</h1> */}
                            {allVans.map(van => (
                                <div className="container__picTitle">
                                    {booking.vanId === van.id &&
                                        <>
                                            <h2 style={{marginTop: "5%", textDecoration: "underline"}} key={`${van.id}3`}>{van.title}</h2>
                                            <Link key={`${van.id}1`} id='vanImgLink' className="vanImage" to={`/vans/${van.id}`}>\
                                                <img id="vanId" key={`${van.id}2`} src={van?.Images[0]?.url}></img>
                                            </Link>
                                        </>
                                    }
                                </div>
                            ))}
                        </>
                    }
                </>
            ))}
        </div>
    )
}

export default BookingsPage;
