// backend/routes/api/index.js
// All the URLs of the routes in this api router will be prefixed with "/api"
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);



module.exports = router;
