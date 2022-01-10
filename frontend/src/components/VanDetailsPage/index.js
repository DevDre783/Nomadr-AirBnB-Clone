import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getOneVan } from "../../store/vans";


function VanDetailsPage() {
    const { vanId } = useParams();
    console.log(vanId);
    const oneVan = useSelector(state => state.vans);
    const dispatch = useDispatch();
    console.log(oneVan);

    useEffect(() => {
        dispatch(getOneVan(vanId));
        console.log('I work !!');
    },[dispatch, vanId]);

    return (
        <div>
            {/* <h2>{oneVan.title}</h2>
            <img id="vanId" key={oneVan.id} src={oneVan.Images[0].url}></img> */}
            <h1>Test</h1>
        </div>
    )
}

export default VanDetailsPage;
