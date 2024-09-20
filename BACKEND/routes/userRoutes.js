const express = require('express');
const { signup } = require('../controllers/signupController');
const { signin } = require('../controllers/signinController');

const router = express.Router();

// POST route for user sign-up
router.post('/signup', signup);

// POST route for user sign-in
router.post('/signin', signin);

module.exports = router;
