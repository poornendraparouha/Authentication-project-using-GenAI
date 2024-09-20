const express = require('express');
const { signup } = require('../controllers/userController');
const router = express.Router();

// POST route for user sign-up
router.post('/signup', signup);

module.exports = router;
