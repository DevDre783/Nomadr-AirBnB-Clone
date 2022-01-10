import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {states} from '../utils'

function VanHostForm() {
    const [title, setTitle] = useState()
    const [country, setCountry] = useState()
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [zipCode, setZipCode] = useState()
    const [description, setDescription] = useState()
    const [cost, setCost] = useState()
    const [passenger, setPassenger] = useState()
    console.log(states)

    const handleSubmit = async (e) => {
        e.preventDefault();

        //!!START SILENT
        const payload = {
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
        };

        let createdSpot;

        try {
            createdSpot = await dispatch(addVan(payload));
        } catch (error) {
            throw new Error("This did not work!!")
            // if (error instanceof ValidationError) setErrorMessages(error.errors);
            // // If error is not a ValidationError, add slice at the end to remove extra
            // // "Error: "
            // else setErrorMessages({ overall: error.toString().slice(7) })
        }
    }

    return (
        <div>
            <h1>Host Van Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Van Name"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
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
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                />
                <input
                    type='number'
                    placeholder="Passengers"
                    value={passenger}
                    onChange={e => setPassenger(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default VanHostForm;
