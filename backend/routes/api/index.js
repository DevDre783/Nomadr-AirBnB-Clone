// backend/routes/api/index.js
// All the URLs of the routes in this api router will be prefixed with "/api"
const router = require('express').Router();

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
