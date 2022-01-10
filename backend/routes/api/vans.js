const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Van, Image, Amenity } = require('../../db/models');
const router = express.Router();


// USE FOR VALIDATIONS LATER
// const validateLogin = [
//     check('credential')
//         .exists({ checkFalsy: true })
//         .notEmpty()
//         .withMessage('Please provide a valid email or username.'),
//     check('password')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a password.'),
//     handleValidationErrors,
// ];


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
        include: [Image, Amenity]
    });

    res.json(specificVan);
}));

router.post('/host', requireAuth, asyncHandler(async (req, res) => {

    const id = await Spot.create(req.body)

    return res.json({
        id
    })
}))

module.exports = router;
