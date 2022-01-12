import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { getOneVan, editVan } from "../../store/vans";
import {states} from '../utils';


function EditVanForm() {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    // console.log(session);
    const { vanId } = useParams();
    const vanInfo = useSelector(state => state.vans[vanId])
    // Vans
    const [title, setTitle] = useState(vanInfo?.title);
    const [country, setCountry] = useState(vanInfo?.country);
    const [state, setState] = useState(vanInfo?.state);
    const [city, setCity] = useState(vanInfo?.city);
    const [address, setAddress] = useState(vanInfo?.address);
    const [zipCode, setZipCode] = useState(vanInfo?.zipCode);
    const [description, setDescription] = useState(vanInfo?.description);
    const [costPerNight, setCostPerNight] = useState(vanInfo?.costPerNight);
    const [totalPassengers, setTotalPassengers] = useState(vanInfo?.totalPassengers);
    // Images
    const [url, setUrl] = useState(vanInfo?.Images[0].url);
    // Amenities
    const [kitchen, setKitchen] = useState(vanInfo?.Amenities[0].kitchen);
    const [shower, setShower] = useState(vanInfo?.Amenities[0].shower);
    const [spareTire, setSpareTire] = useState(vanInfo?.Amenities[0].spareTire);
    const [firstAidKit, setFirstAidKit] = useState(vanInfo?.Amenities[0].firstAidKit);
    const [roadsideAssistance, setRoadsideAssistance] = useState(vanInfo?.Amenities[0].roadsideAssistance);
    const [roofRackStorage, setRoofRackStorage] = useState(vanInfo?.Amenities[0].roofRackStorage);
    const [hotSpot, setHotSpot] = useState(vanInfo?.Amenities[0].hotSpot);
    const [chargingStation, setChargingStation] = useState(vanInfo?.Amenities[0].chargingStation);

    const history = useHistory('');

    // console.log(“Edit form”, spotInfo?.Images[0]?.id)
    useEffect(() => {
        dispatch(getOneVan(vanId))
        if (title) localStorage.setItem('title', vanInfo?.title)
        if (country) localStorage.setItem('country', vanInfo?.country)
        if (state) localStorage.setItem('state', vanInfo?.state)
        if (city) localStorage.setItem('city', vanInfo?.city)
        if (address) localStorage.setItem('address', vanInfo?.address)
        if (zipCode) localStorage.setItem('zipCode', vanInfo?.zipCode)
        if (description) localStorage.setItem('description', vanInfo?.description)
        if (costPerNight) localStorage.setItem('costPerNight', vanInfo?.costPerNight)
        if (totalPassengers) localStorage.setItem('totalPassengers', vanInfo?.totalPassengers)
        if (url) localStorage.setItem('url', vanInfo?.Images[0]?.url)
        if (kitchen) localStorage.setItem('kitchen', vanInfo?.Amenities[0]?.kitchen)
        if (shower) localStorage.setItem('shower', vanInfo?.Amenities[0]?.shower)
        if (spareTire) localStorage.setItem('spareTire', vanInfo?.Amenities[0]?.spareTire)
        if (firstAidKit) localStorage.setItem('firstAidKit', vanInfo?.Amenities[0]?.firstAidKit)
        if (roadsideAssistance) localStorage.setItem('roadsideAssistance', vanInfo?.Amenities[0].roadsideAssistance)
        if (roofRackStorage) localStorage.setItem('roofRackStorage', vanInfo?.Amenities[0]?.roofRackStorage)
        if (hotSpot) localStorage.setItem('hotSpot', vanInfo?.Amenities[0]?.hotSpot)
        if (chargingStation) localStorage.setItem('chargingStation', vanInfo?.Amenities[0]?.chargingStation)
    }, [])

    useEffect(() => {
        dispatch(getOneVan(vanId))
        const localTitle = localStorage.getItem('title')
        setTitle(localTitle)
        const localCountry = localStorage.getItem('country');
        setCountry(localCountry)
        const localState = localStorage.getItem('state');
        setState(localState)
        const localCity = localStorage.getItem('city');
        setCity(localCity)
        const localAddress = localStorage.getItem('address');
        setAddress(localAddress)
        const localZipCode = localStorage.getItem('zipCode');
        setZipCode(localZipCode)
        const localDescription = localStorage.getItem('description');
        setDescription(localDescription)
        const localcostPerNight = localStorage.getItem('costPerNight');
        setCostPerNight(localcostPerNight)
        const localTotalPassengers = localStorage.getItem('totalPassengers');
        setTotalPassengers(localTotalPassengers)
        const localUrl= localStorage.getItem('url');
        setUrl(localUrl)
        const localKitchen = localStorage.getItem('kitchen');
        setKitchen(localKitchen === 'true' ? true : false)
        const localshower = localStorage.getItem('shower');
        setShower(localshower === 'true' ? true : false)
        const localSpareTire = localStorage.getItem('spareTire');
        setSpareTire(localSpareTire === 'true' ? true : false)
        const localFirstAidKit = localStorage.getItem('firstAidKit');
        setFirstAidKit(localFirstAidKit === 'true' ? true : false)
        const localRoadsideAssistance = localStorage.getItem('roadsideAssistance');
        setRoadsideAssistance(localRoadsideAssistance === 'true' ? true : false)
        const localRoofRackStorage = localStorage.getItem('roofRackStorage');
        setRoofRackStorage(localRoofRackStorage === 'true' ? true : false)
        const localHotSpot = localStorage.getItem('hotSpot');
        setHotSpot(localHotSpot === 'true' ? true : false)
        const localChargingStation = localStorage.getItem('chargingStation');
        setChargingStation(localChargingStation === 'true' ? true : false)
    }, [])

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
            id: vanInfo?.Images[0]?.id,
            url
          },
          amenities: {
            id: vanInfo?.Amenities[0]?.id,
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
            console.log("------->", payload);
            createdVan = await dispatch(editVan(payload, vanId));
        } catch (error) {
            throw new Error("This did not work!!")
        }
        console.log(createdVan);
        
        if (createdVan) {
            history.push(`/vans/${createdVan.id.id}`);
            localStorage.clear();
        }
    };


    return (
        <div className="edit__form">
            <h1>Edit Host Form</h1>
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
                    className="edit-host-form"
                    // disabled={validationErrors.length > 0}
                    type="submit">Submit
                </button>
                <Link to={`/`}>
                    <button>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default EditVanForm;
