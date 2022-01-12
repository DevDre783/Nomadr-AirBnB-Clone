import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getOneVan } from "../../store/vans";
import { deleteVan } from "../../store/vans";


function VanDetailsPage() {
    const { vanId } = useParams();
    // console.log(vanId);
    const oneVan = useSelector(state => state.vans[vanId]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    // console.log(oneVan);

    useEffect(() => {
        dispatch(getOneVan(vanId));
        dispatch(deleteVan(vanId));

        // console.log('I work !!');
    },[dispatch, vanId]);

    const deleteButtonClick = () => {
        console.log('hello?')
        deleteVan(vanId);
    }

    return (
        <div>
            <h2>{oneVan?.title}</h2>
            <img key={oneVan?.id} src={oneVan?.Images[0]?.url}></img>
            {sessionUser?.id === oneVan?.userId &&
                <>
                    <Link to={`/vans/${oneVan?.id}/host`}>
                        <button>Edit</button>
                    </Link>
                    <Link to={`/vans/${oneVan?.id}`}>
                        <button onClick={(e) => deleteButtonClick()}>Delete</button>
                    </Link>
                </>
            }
            <h3>{oneVan?.description}</h3>
            <div> Amenities:
                <ul className="amenities__list">
                    <li>{`Kitchen ${oneVan?.Amenities[0]?.kitchen}`}</li>
                    <li>{`Shower ${oneVan?.Amenities[0]?.shower}`}</li>
                    <li>{`Spare Tire ${oneVan?.Amenities[0]?.spareTire}`}</li>
                    <li>{`FirstAid Kit ${oneVan?.Amenities[0]?.firstAidKit}`}</li>
                    <li>{`Roadside Assistance ${oneVan?.Amenities[0]?.roadsideAssistance}`}</li>
                    <li>{`RoofRack Storage ${oneVan?.Amenities[0]?.roofRackStorage}`}</li>
                    <li>{`Hotspot ${oneVan?.Amenities[0]?.hotSpot}`}</li>
                    <li>{`Charging Station ${oneVan?.Amenities[0]?.chargingStation}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default VanDetailsPage;
