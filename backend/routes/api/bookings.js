const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Van, Image, Amenity, User } = require('../../db/models');
const { db } = require('../../config');
const router = express.Router();
