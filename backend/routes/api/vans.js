const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Van, Image, Amenity, User } = require('../../db/models');
const { db } = require('../../config');
const router = express.Router();


const vanHostForm = [
    check('Van.address')
        .exists({ checkFalsy: true })
        .isLength({ max: 255 })
        .withMessage("Address must be less 255 characters"),
    check('Van.city')
        .exists({ checkFalsy: true })
        .isLength({ max: 255 })
        .withMessage("City must be less 255 characters"),
    check('Van.state')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage("City must be less 255 characters"),
    check('Van.country')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage("Country must be less 50 characters"),
    check('Van.title')
        .exists({ checkFalsy: true })
        .isLength({ max: 100 })
        .withMessage("Title must be less 100 characters"),
    check('Van.description')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description"),
    check('Van.costPerNight')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a price per night"),
    check('Van.zipCode')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid zip code"),
    check('Van.totalPassengers')
        .exists({ checkFalsy: true })
        .withMessage("Please provide number of total passengers allowed."),
    check('Image.url')
        .exists({ checkFalsy: true })
        .isLength({ max: 255 })
        .withMessage("Please provide a valid Image URL (http or https)"),
];


// GET  VANS - all the vans

router.get('/', asyncHandler(async (req, res) => {
    const vans = await Van.findAll({
        include: [Image, Amenity]
    });
    console.log(vans[0].Images[0].url)

    res.json(vans);
}));

// GET EACH VAN BY ID

router.get('/:vanId', asyncHandler(async (req, res) => {
    const specificVanId = parseInt(req.params.vanId, 10);

    const specificVan = await Van.findByPk(specificVanId, {
        include: [Image, Amenity, User]
    });

    res.json(specificVan);
}));

router.post('/host', vanHostForm, requireAuth, asyncHandler(async (req, res) => {
    const { image, vans, amenities } = req.body;
    const id = await Van.create(vans);
    const newImageUrl = {
        vanId: id.id,
        url: image.url
    }
    await Image.create(newImageUrl);
    const newAmenityList = {
        vanId: id.id,
        kitchen: amenities.kitchen,
        shower: amenities.shower,
        spareTire: amenities.spareTire,
        firstAidKit: amenities.firstAidKit,
        roadsideAssistance: amenities.roadsideAssistance,
        roofRackStorage: amenities.roofRackStorage,
        hotSpot: amenities.hotSpot,
        chargingStation: amenities.chargingStation
    };
    await Amenity.create(newAmenityList);

    console.log(id);
    return res.json({
        id
    });
}));

router.put('/:id/host', vanHostForm, requireAuth, asyncHandler(async (req, res) => {
    // console.log("here");
    const vanId = parseInt(req.params.id, 10);
    const currVan = await Van.findByPk(vanId);

    const { image, vans, amenities } = req.body
    // update spot
    const id = await currVan.update(vans)
    // console.log("FLAGGGGGGG", image.id)

    //  update image
    const newImageUrl = {
        id: image.id,
        vanId: id.id,
        url: image.url
    }

    const currImage = await Image.findByPk(image.id);
    // console.log(currImage, "<=========")
    await currImage.update(newImageUrl)

    console.log("AAAAAA", amenities)
    // update amenity
    const newAmenityList = {
        spotId: id.id,
        kitchen: amenities.kitchen,
        shower: amenities.shower,
        spareTire: amenities.spareTire,
        firstAidKit: amenities.firstAidKit,
        roadsideAssistance: amenities.roadsideAssistance,
        roofRackStorage: amenities.roofRackStorage,
        hotSpot: amenities.hotSpot,
        chargingStation: amenities.chargingStation
    }

    const currAmenity = await Amenity.findByPk(amenities.id)
    await currAmenity.update(newAmenityList);

    return res.json({
        id
    })
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    console.log("DELETE ROUTE","HIIIIII");

    const { id, Images, Amenities } = req.body
    const vanId = parseInt(req.params.id, 10);
    const imageId = Images[0].id;
    const amenitiesId = Amenities[0].id;

    // console.log("TEST1", vanId);
    // console.log("TEST2", Images);
    // console.log("TEST3", amenitiesId);

    const currVan = await Van.findByPk(vanId);
    const currImage = await Image.findByPk(imageId);
    const currAmenity = await Amenity.findByPk(amenitiesId);

    console.log("DELETE BODY VAN ====>", currVan)
    console.log("DELETE BODY Image ===>", currImage)
    console.log("DELETE BODY Amenities ===> ", currAmenity)


    if (currVan && currImage && currAmenity) {
        await currAmenity.destroy();
        await currImage.destroy();
        await currVan.destroy();

        res.json({ message: "Delete Successful" });
    } else {
        console.log('unsuccessful');
    }

    res.json({ message: "Delete Unsuccessful" });
}));

module.exports = router;
