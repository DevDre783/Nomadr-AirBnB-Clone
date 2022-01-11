import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { postVan } from "../../store/vans";
import {states} from '../utils';


function EditVanForm() {
    const session = useSelector(state => state.session);
    // Vans
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [description, setDescription] = useState('');
    const [costPerNight, setCostPerNight] = useState('');
    const [totalPassengers, setTotalPassengers] = useState('');
    // Images
    const [url, setUrl] = useState('');
    // Amenities
    

    const dispatch = useDispatch('');
    const history = useHistory('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        //!!START SILENT
        const payload = {
          vans: {
            userId: session.user.id,
            address,
            city,
            state,
            country,
            title,
            description,
            costPerNight,
            totalPassengers,
            zipCode
          },
          image: {
            url
          },
        //   amenities: {
        //     kitchen,
        //     shower,
        //     spareTire,
        //     firstAidKit,
        //     roadsideAssistance,
        //     roofRackStorage,
        //     hotSpot,
        //     chargingStation
        //   }
        };

        let createdVan;
        try {
            createdVan = await dispatch(postVan(payload));
        } catch (error) {
            throw new Error("This did not work!!")
            // if (error instanceof ValidationError) setErrorMessages(error.errors);
            // // If error is not a ValidationError, add slice at the end to remove extra
            // // "Error: "
            // else setErrorMessages({ overall: error.toString().slice(7) })
        }
        //!!END
        if (createdVan) {
            history.push(`/vans/${createdVan.id.id}`);
        }
    };


    return (
        <div>
            <h1>Edit Van Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Van Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <select
                    type='text'
                    placeholder="State"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    >
                    {states.map(state => (
                        <option key={state}>
                            {state}
                        </option>
                    ))}
                </select>
                <input
                    type='text'
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Zip Code"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Cost Per Night"
                    value={costPerNight}
                    onChange={e => setCostPerNight(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Passengers"
                    value={totalPassengers}
                    onChange={e => setTotalPassengers(e.target.value)}
                />
                <label> Image Url:
                    <input
                        type='string'
                        placeholder="image url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditVanForm;
