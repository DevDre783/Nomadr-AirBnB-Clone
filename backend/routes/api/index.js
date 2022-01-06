// backend/routes/api/index.js
// All the URLs of the routes in this api router will be prefixed with "/api"
const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

// GET /api/restore-user
router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user);
});

// GET /api/require-auth
router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
});

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});


module.exports = router;
