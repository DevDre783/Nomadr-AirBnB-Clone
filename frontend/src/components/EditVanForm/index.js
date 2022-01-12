import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { getOneVan, postVan } from "../../store/vans";
import {states} from '../utils';


function EditVanForm() {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    const { vanId } = useParams();
    const vanInfo = useSelector(state => state.vans[vanId])
    // Vans
    const [title, setTitle] = useState(vanInfo?.title);
    const [country, setCountry] = useState(vanInfo?.country);
    const [state, setState] = useState(vanInfo?.state);
    const [city, setCity] = useState(vanInfo?.city);
    const [address, setAddress] = useState(vanInfo?.address);
    const [zipCode, setZipCode] = useState(vanInfo?.title);
    const [description, setDescription] = useState(vanInfo?.title);
    const [costPerNight, setCostPerNight] = useState(vanInfo?.title);
    const [totalPassengers, setTotalPassengers] = useState(vanInfo?.title);
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

    const dispatch = useDispatch('');
    const history = useHistory('');

    // console.log(“Edit form”, spotInfo?.Images[0]?.id)
    // useEffect(() => {
    //     dispatch(getOneVan(vanId))
    //     if (title) localStorage.setItem('title', spotInfo?.title)
    //     if (country) localStorage.setItem('country', spotInfo?.country)
    //     if (state) localStorage.setItem('state', spotInfo?.state)
    //     if (city) localStorage.setItem('city', spotInfo?.city)
    //     if (address) localStorage.setItem('address', spotInfo?.address)
    //     if (zipCode) localStorage.setItem('zipCode', spotInfo?.zipCode)
    //     if (description) localStorage.setItem('description', spotInfo?.description)
    //     if (price) localStorage.setItem('price', spotInfo?.price)
    //     if (guests) localStorage.setItem('guests', spotInfo?.guests)
    //     if (bedrooms) localStorage.setItem('bedrooms', spotInfo?.bedrooms)
    //     if (bathrooms) localStorage.setItem('bathrooms', spotInfo?.bathrooms)
    //     if (url) localStorage.setItem('url', spotInfo?.Images[0]?.url)
    //     if (kitchen) localStorage.setItem('kitchen', spotInfo?.Amenities[0]?.kitchen)
    //     if (privateBeachAccess) localStorage.setItem('privateBeachAccess', spotInfo?.Amenities[0]?.privateBeachAccess)
    //     if (firePlace) localStorage.setItem('firePlace', spotInfo?.Amenities[0]?.firePlace)
    //     if (parking) localStorage.setItem('parking', spotInfo?.Amenities[0]?.parking)
    //     if (pool) localStorage.setItem('pool', spotInfo?.Amenities[0].pool)
    //     if (hotTub) localStorage.setItem('hotTub', spotInfo?.Amenities[0]?.hotTub)
    //     if (pets) localStorage.setItem('pets', spotInfo?.Amenities[0]?.pets)
    // }, [])
    // useEffect(() => {
    //     dispatch(getOneSpot(spotId))
    //     const localTitle = localStorage.getItem(“title”)
    //     setTitle(localTitle)
    //     const localCountry = localStorage.getItem(“country”);
    //     setCountry(localCountry)
    //     const localState = localStorage.getItem(“state”);
    //     setState(localState)
    //     const localCity = localStorage.getItem(“city”);
    //     setCity(localCity)
    //     const localAddress = localStorage.getItem(“address”);
    //     setAddress(localAddress)
    //     const localZipCode = localStorage.getItem(“zipCode”);
    //     setZipCode(localZipCode)
    //     const localDescription = localStorage.getItem(“description”);
    //     setDescription(localDescription)
    //     const localPrice = localStorage.getItem(“price”);
    //     setPrice(localPrice)
    //     const localGuests = localStorage.getItem(“guests”);
    //     setGuests(localGuests)
    //     const localBedrooms = localStorage.getItem(“bedrooms”);
    //     setBedrooms(localBedrooms)
    //     const localBathrooms = localStorage.getItem(“bathrooms”);
    //     setBathrooms(localBathrooms)
    //     const localUrl= localStorage.getItem(“url”);
    //     setUrl(localUrl)
    //     const localKitchen = localStorage.getItem(“kitchen”);
    //     setKitchen(localKitchen === ‘true’ ? true : false)
    //     const localPrivateBeachAccess = localStorage.getItem(“privateBeachAccess”);
    //     setPrivateBeachAccess(localPrivateBeachAccess === ‘true’ ? true : false)
    //     const localFirePlace = localStorage.getItem(“firePlace”);
    //     setFirePlace(localFirePlace === ‘true’ ? true : false)
    //     const localParking = localStorage.getItem(“parking”);
    //     setParking(localParking === ‘true’ ? true : false)
    //     const localPool = localStorage.getItem(“pool”);
    //     setPool(localPool === ‘true’ ? true : false)
    //     const localHotTub = localStorage.getItem(“hotTub”);
    //     setHotTub(localHotTub === ‘true’ ? true : false)
    //     const localPets = localStorage.getItem(“pets”);
    //     setPets(localPets === ‘true’ ? true : false)
    // }, [])

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
        console.log("------->", payload);

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
