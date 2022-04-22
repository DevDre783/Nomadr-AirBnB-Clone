import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
import { getOneVan } from "../../store/vans";
import { deleteVan } from "../../store/vans";
import './VanDetailsPage.css';
import Calendar from 'react-calendar'
import { FaCheck } from "react-icons/fa";
import { GiFlatTire, GiShower, GiCookingPot, GiFirstAidKit, GiTowTruck } from "react-icons/gi"
import { BsFillHddRackFill } from "react-icons/bs"
import { GrWifi } from "react-icons/gr"
import { RiBattery2ChargeLine } from "react-icons/ri"
// import {GiFlatTire} from "GenIcon"
import 'react-calendar/dist/Calendar.css';
import theVan from "../../images/Van_driving.gif"


function VanDetailsPage() {
    const { vanId } = useParams();
    // console.log(vanId);
    const oneVan = useSelector(state => state.vans[vanId]);

    // console.log("FLAGGGG", oneVan);
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log(oneVan);

    useEffect(() => {
        dispatch(getOneVan(vanId));
        dispatch(deleteVan(vanId));

        // console.log('I work !!');
    }, [dispatch, vanId]);

    console.log(vanId);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     dispatch(postBooking(userId, vanId, the_booking))
    //     history.push("/bookings")
    // }

    const deleteBtn = async (e) => {
        e.preventDefault()
        let deleteVanRes;
        try {
            console.log("OneVan", oneVan)
            deleteVanRes = await dispatch(deleteVan(oneVan, vanId));
        } catch (error) {
            throw new Error("Error - Resource not found")
        }
        if (deleteVanRes.message === "Delete Successful") {
           history.push("/vans")
        }
    }

     // const defaultDate = () => {
    //     const date = new Date().toISOString().slice(0, 10);
    //     return date;
    // };

    return (
        <div className="the__page">
            <div className="details__container">
                <h2 className="van-title">{oneVan?.title}</h2>
                <p className="hosted-by">Hosted by: {oneVan?.User?.username}</p>
                <div className="top__container">
                    <img className="van__image" key={oneVan?.id} src={oneVan?.Images[0]?.url}></img>
                </div>
                {sessionUser?.id === oneVan?.userId &&
                    <div className="buttons__container">
                        <Link to={`/vans/${oneVan?.id}/host`}>
                            <button className="edit-btn">Edit</button>
                        </Link>
                        <button className="delete-btn" onClick={deleteBtn}>Delete</button>
                    </div>
                }
                <p className="location__tag">{oneVan?.city}, {oneVan?.state} {oneVan?.zipCode}</p>
                <h2 key={`${oneVan.id}6`} className='price-text'>{`$${oneVan.costPerNight} / night`}</h2>
                <div className="mid__container">
                <p className="van-description">{oneVan?.description}</p>
                    <div className="amenities__list">
                        <ul style={{listStyle: "none"}}>
                            <li><span className="huh"><GiCookingPot className="ICONS"/></span> Kitchen: {oneVan?.Amenities[0]?.kitchen ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><GiShower className="ICONS"/></span> Shower: {oneVan?.Amenities[0]?.shower ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><GiFlatTire className="ICONS"/></span> Spare: {oneVan?.Amenities[0]?.spareTire ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><GiFirstAidKit className="ICONS" id="extra_styling"/></span> FirstAid: {oneVan?.Amenities[0]?.firstAidKit ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><GiTowTruck className="ICONS" id="extra_styling"/></span> Roadside: {oneVan?.Amenities[0]?.roadsideAssistance ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><BsFillHddRackFill className="ICONS" id="extra_styling"/></span> RoofRack: {oneVan?.Amenities[0]?.roofRackStorage ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><GrWifi className="ICONS"/></span> HotSpot: {oneVan?.Amenities[0]?.hotSpot ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                            <li><span className="huh"><RiBattery2ChargeLine className="ICONS"/></span> Charging: {oneVan?.Amenities[0]?.chargingStation ? <span className="huh"><FaCheck style={{color: "green", marginLeft: "5%"}}/></span> : <span style={{color: "red", marginLeft: "2%"}}> N/A</span>}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lowermost__container">
                <div className="reviews__container">
                    <h1 className="reviews__header" style={{textDecoration: "underline"}}>Reviews</h1>
                    <div className="the__reviews">
                        map out the reviews from the database here.... + usernames
                    </div>
                </div>
                <div className="booking__container">
                    <div class="calender__container">
                        <h3 className="calendar__header">Book with us!</h3>
                        <Calendar className="the__calendar"/>
                    </div>
                    <div className="the__form1">
                        <form>
                            <label># of Passengers<input type="number"></input></label>
                        </form>
                        <button type="submit" className="submit">Book now</button>
                    </div>
                </div>
            </div>
            <img className="the__gif" src={theVan}></img>
        </div>
    )
}

export default VanDetailsPage;
