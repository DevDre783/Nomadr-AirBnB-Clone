import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getOneVan } from "../../store/vans";


function VanDetailsPage() {
    const { vanId } = useParams();
    console.log(vanId);
    const oneVan = useSelector(state => state.vans[vanId]);
    const dispatch = useDispatch();
    // console.log(oneVan);

    useEffect(() => {
        dispatch(getOneVan(vanId));
        console.log('I work !!');
    },[dispatch, vanId]);

    return (
        <div>
            <h2>{oneVan.title}</h2>
            <img key={oneVan.id} src={oneVan.Images[0].url}></img>
            <h3>{oneVan.description}</h3>
        </div>
    )
}

export default VanDetailsPage;
