import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
import { getOneVan } from "../../store/vans";
import { deleteVan } from "../../store/vans";
import './VanDetailsPage.css';
import Calendar from 'react-calendar'
import { FaCheck } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';


function VanDetailsPage() {
    const { vanId } = useParams();
    // console.log(vanId);
    const oneVan = useSelector(state => state.vans[vanId]);

    // console.log("FLAGGGG", oneVan);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log(oneVan);

    useEffect(() => {
        dispatch(getOneVan(vanId));
        dispatch(deleteVan(vanId));

        // console.log('I work !!');
    }, [dispatch, vanId]);

    console.log(vanId);

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

    return (
        <div>
            <div className="details__container">
                <h2 className="van-title">{oneVan?.title}</h2>
                <p className="hosted-by">Hosted by: {oneVan?.User?.username}</p>
                <div className="top__container">
                    <img className="van__image" key={oneVan?.id} src={oneVan?.Images[0]?.url}></img>
                    <div className="amenities__list">
                        <h3>Available Amenities:</h3>
                        <ul style={{listStyle: "none"}}>
                            <li>Kitchen: {oneVan?.Amenities[0]?.kitchen ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>Shower: {oneVan?.Amenities[0]?.shower ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>Spare: {oneVan?.Amenities[0]?.spareTire ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>FirstAid: {oneVan?.Amenities[0]?.firstAidKit ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>Roadside: {oneVan?.Amenities[0]?.roadsideAssistance ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>RoofRack: {oneVan?.Amenities[0]?.roofRackStorage ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>HotSpot: {oneVan?.Amenities[0]?.hotSpot ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                            <li>Charging: {oneVan?.Amenities[0]?.chargingStation ? <FaCheck style={{color: "green"}}/> : <span style={{color: "red"}}>False</span>}</li>
                        </ul>
                    </div>
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
                <h3 className="description-label">Description</h3>
                <p className="van-description">{oneVan?.description}</p>
            </div>
            <div className="lowermost__container">
                <div className="reviews__container">
                    <h1 className="reviews__header">Reviews</h1>
                    <div>
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
                        <button type="submit">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VanDetailsPage;
