import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { postVan } from "../../store/vans";
import { states } from '../utils';


function VanHostForm() {
    const session = useSelector(state => state.session);
    // Vans
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState(states[0]);
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [description, setDescription] = useState('');
    const [costPerNight, setCostPerNight] = useState('');
    const [totalPassengers, setTotalPassengers] = useState('');
    // Images
    const [url, setUrl] = useState('');
    // Amenities
    const [kitchen, setKitchen] = useState(false);
    const [shower, setShower] = useState(false);
    const [spareTire, setSpareTire] = useState(false);
    const [firstAidKit, setFirstAidKit] = useState(false);
    const [roadsideAssistance, setRoadsideAssistance] = useState(false);
    const [roofRackStorage, setRoofRackStorage] = useState(false);
    const [hotSpot, setHotSpot] = useState(false);
    const [chargingStation, setChargingStation] = useState(false);
    // Errors
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];

        if (title.length < 5) validationErrors.push("Must provide a title longer than 5 characters for your listing.");
        if (country.length === 0) validationErrors.push("Must provide the country.")
        if (city.length === 0) validationErrors.push("Must provide a valid City.")
        if (address.length === 0) validationErrors.push("Must provide an Address.")
        if (zipCode.length < 5) validationErrors.push("Must provide a valid zipcode.")
        if (description.length === 0) validationErrors.push("Please provide a brief description for your listing.")
        if (description.length < 25) validationErrors.push("Description is too short. Please provide some more detail.")
        if (!costPerNight) validationErrors.push("Your listing cannot be free! Please provide the cost per night.")
        if (!totalPassengers) validationErrors.push("Must provide the total amount of passengers allowed.")
        if (!url.includes("http") || !url.includes("https")) validationErrors.push("MUST provide at least VALID 1 photo for your listing (http or https).")

        setErrors(validationErrors);

    }, [title, country, city, address, zipCode, description, costPerNight, totalPassengers, url]);

    const dispatch = useDispatch('');
    const history = useHistory('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            amenities: {
                kitchen,
                shower,
                spareTire,
                firstAidKit,
                roadsideAssistance,
                roofRackStorage,
                hotSpot,
                chargingStation
            }
        };

        let createdVan;

        try {
            createdVan = await dispatch(postVan(payload));
        } catch (error) {
            throw new Error("This did not work!!")
        }

        if (createdVan) {
            history.push(`/vans/${createdVan.id.id}`);
        }
    };


    return (
        <div className="edit__form">
            <h1>Host Your Van!</h1>
            <ul className="hostForm__errors">
                {errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
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
                <label htmlFor="kitchen">Kitchen
                    <input
                        id="kitchen"
                        type='checkbox'
                        checked={kitchen}
                        onChange={(e) => setKitchen(!kitchen)}
                    />
                </label>
                <label htmlFor="shower">Shower
                    <input
                        id="shower"
                        type='checkbox'
                        checked={shower}
                        onChange={(e) => setShower(!shower)}
                    />
                </label>
                <label htmlFor="spareTire">Spare Tire
                    <input
                        id="spareTire"
                        type='checkbox'
                        checked={spareTire}
                        onChange={(e) => setSpareTire(!spareTire)}
                    />
                </label>
                <label htmlFor="firstAidKit">FirstAid Kit
                    <input
                        id="firstAidKit"
                        type='checkbox'
                        checked={firstAidKit}
                        onChange={(e) => setFirstAidKit(!firstAidKit)}
                    />
                </label>
                <label htmlFor="roadsideAssistance">Roadside Assistance
                    <input
                        id="roadsideAssistance"
                        type='checkbox'
                        checked={roadsideAssistance}
                        onChange={(e) => setRoadsideAssistance(!roadsideAssistance)}
                    />
                </label>
                <label htmlFor="roofRackStorage">RoofRack Storage
                    <input
                        id="roofRackStorage"
                        type='checkbox'
                        checked={roofRackStorage}
                        onChange={(e) => setRoofRackStorage(!roofRackStorage)}
                    />
                </label>
                <label htmlFor="hotSpot">Hotspot
                    <input
                        id="hotSpot"
                        type='checkbox'
                        checked={hotSpot}
                        onChange={(e) => setHotSpot(!hotSpot)}
                    />
                </label>
                <label htmlFor="chargingStation">Charging Station
                    <input
                        id="chargingStation"
                        type='checkbox'
                        checked={chargingStation}
                        onChange={(e) => setChargingStation(!chargingStation)}
                    />
                </label>
                <button
                    className="host-form"
                    disabled={errors.length > 0}
                    type="submit">Submit
                </button>
                <Link to={`/`}>
                    <button>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default VanHostForm;
