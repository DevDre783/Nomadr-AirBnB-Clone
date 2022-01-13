import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
import { getOneVan } from "../../store/vans";
import { deleteVan } from "../../store/vans";
import './VanDetailsPage.css';


function VanDetailsPage() {
    const { vanId } = useParams();
    // console.log(vanId);
    const oneVan = useSelector(state => state.vans[vanId]);
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
        <div className="details__container">
            <h2 className="van-title">{oneVan?.title}</h2>
            <img className="van__image" key={oneVan?.id} src={oneVan?.Images[0]?.url}></img>
            {sessionUser?.id === oneVan?.userId &&
                <div className="buttons__container">
                    <Link to={`/vans/${oneVan?.id}/host`}>
                        <button className="edit-btn">Edit</button>
                    </Link>
                    <button className="delete-btn" onClick={deleteBtn}>Delete</button>
                </div>
            }
            {/* <h3>Hosted by: {oneVan?.User?.username}</h3> */}
            <p className="location__tag">Location: {oneVan?.city}, {oneVan?.state} {oneVan?.zipCode}</p>
            <p className="van-description">{oneVan?.description}</p>
            <div> Available Amenities:
                <ul className="amenities__list">
                    <li>{`Kitchen: ${oneVan?.Amenities[0]?.kitchen}`}</li>
                    <li>{`Shower: ${oneVan?.Amenities[0]?.shower}`}</li>
                    <li>{`Spare Tire: ${oneVan?.Amenities[0]?.spareTire}`}</li>
                    <li>{`FirstAid Kit: ${oneVan?.Amenities[0]?.firstAidKit}`}</li>
                    <li>{`Roadside Assistance: ${oneVan?.Amenities[0]?.roadsideAssistance}`}</li>
                    <li>{`RoofRack Storage: ${oneVan?.Amenities[0]?.roofRackStorage}`}</li>
                    <li>{`Hotspot: ${oneVan?.Amenities[0]?.hotSpot}`}</li>
                    <li>{`Charging Station: ${oneVan?.Amenities[0]?.chargingStation}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default VanDetailsPage;
