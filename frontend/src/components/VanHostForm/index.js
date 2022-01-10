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
    const [guest, setGuest] = useState()
    const [bed, setBed] = useState()
    const [bath, setBath] = useState()

    console.log(states)
    return (
        <div>
            <h1>Cabin Form</h1>
            <form>
                <input
                    type='text'
                    placeholder="Cabin Name"
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
                    placeholder="Guests"
                    value={guest}
                    onChange={e => setGuest(e.target.value)}
                />
                 <input
                    type='number'
                    placeholder="Beds"
                    value={bed}
                    onChange={e => setBed(e.target.value)}
                />
                 <input
                    type='number'
                    placeholder="Baths"
                    value={bath}
                    onChange={e => setBath(e.target.value)}
                />
            </form>
        </div>
    )
}

export default VanHostForm;
