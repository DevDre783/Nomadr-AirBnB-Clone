// backend/routes/api/index.js
// All the URLs of the routes in this api router will be prefixed with "/api"
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const vansRouter = require('./vans');
const bookingRouter = require('./bookings.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/vans', vansRouter);
router.use('/bookings', bookingRouter);

router.post('/test', (req, res)=> {
    res.json({ requestBody: req.body })
});

module.exports = router;
