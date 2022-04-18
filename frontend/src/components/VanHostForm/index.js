import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { postVan } from "../../store/vans";
import { states } from '../utils';
import './VanForm.css'


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
        if (!url.includes("http") || !url.includes("https")) validationErrors.push("MUST provide at least one VALID photo for your listing (https).")

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
        <>
        <div className="errors__container">
            <ol className="hostForm__errors">
                {errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ol>
        </div>
        <div className="form__container">
            <form className="the__form" onSubmit={handleSubmit}>
                <div className="main__info">
                    <h1>Host Your Van!</h1>
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
                    State<select
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
                        type='text'
                        placeholder="Zip Code"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder="Cost Per Night"
                        value={costPerNight}
                        onChange={e => setCostPerNight(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder="Total Passengers"
                        value={totalPassengers}
                        onChange={e => setTotalPassengers(e.target.value)}
                    />
                    <input
                        type='string'
                        placeholder="image url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>

                <h3 className="amenities__header">Amenities:</h3>
                <div className="amenities__container">
                    <div className="row1">
                    Kitchen<input
                        className="amenity1"
                        id='kitchen'
                        type='checkbox'
                        checked={kitchen}
                        onChange={(e) => setKitchen(!kitchen)}
                    />
                    Shower<input
                        className="amenity2"
                        id="shower"
                        type='checkbox'
                        checked={shower}
                        onChange={(e) => setShower(!shower)}
                    />
                    Spare<input
                        className="amenity3"
                        id="spareTire"
                        type='checkbox'
                        checked={spareTire}
                        onChange={(e) => setSpareTire(!spareTire)}
                    />
                    FirstAid<input
                        className="amenity4"
                        id="firstAidKit"
                        type='checkbox'
                        checked={firstAidKit}
                        onChange={(e) => setFirstAidKit(!firstAidKit)}
                    />
                    </div>
                    <div className="row2">
                    Roadside<input
                        className="amenity5"
                        id="roadsideAssistance"
                        type='checkbox'
                        checked={roadsideAssistance}
                        onChange={(e) => setRoadsideAssistance(!roadsideAssistance)}
                    />
                    RoofRack<input
                        className="amenity6"
                        id="roofRackStorage"
                        type='checkbox'
                        checked={roofRackStorage}
                        onChange={(e) => setRoofRackStorage(!roofRackStorage)}
                    />
                    Hotspot<input
                        className="amenity7"
                        id="hotSpot"
                        type='checkbox'
                        checked={hotSpot}
                        onChange={(e) => setHotSpot(!hotSpot)}
                    />
                    Charging<input
                        className="amenity8"
                        id="chargingStation"
                        type='checkbox'
                        checked={chargingStation}
                        onChange={(e) => setChargingStation(!chargingStation)}
                    />
                    </div>
                </div>

                <textarea
                    style={{resize: "none"}}
                    rows="6"
                    cols="40"
                    type='text'
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button
                    className="form-submit"
                    disabled={errors.length > 0}
                    type="submit">Submit
                </button>
                <Link to={`/`}>
                    <button className="form-cancel">Cancel</button>
                </Link>
            </form>

            <div className="image__container">
                <img className="form__image" src={`https://bearfoottheory.com/wp-content/uploads/2020/07/van-no-space.png`}></img>
            </div>
        </div>
        </>
    )
}

export default VanHostForm;
