import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAllBookings } from "../../store/booking";


function BookingsPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    console.log("THE ID", userId)
    const allBookings = Object.values(useSelector(state => state.bookings))
    console.log("ALL BOOKINGS", allBookings)

    useEffect(() => {
        dispatch(getAllBookings(allBookings))
    }, [])

    return (
        <div>
            {allBookings.map(booking => (
                <>
                    {userId === booking.userId &&
                        <h1 key={booking.id} style={{marginTop: "10%", marginLeft: "20%"}}>{booking.startDate} ......TO...... {booking.endDate}</h1>
                    }
                </>
            ))}
        </div>
    )
}

export default BookingsPage;
