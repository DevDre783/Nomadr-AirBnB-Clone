const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const express = require('express');
const router = express.Router();

router.get('/hello', csrfProtection, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});


module.exports = router;
