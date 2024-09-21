const express = require('express');
const { signup } = require('../controllers/signupController');
const { signin } = require('../controllers/signinController');
const verifyToken = require('../middlewares/authMiddleware');  // Import middleware

const router = express.Router();

// POST route for user sign-up
router.post('/signup', signup);

// POST route for user sign-in
router.post('/signin', signin);

// GET route to validate JWT token
router.get('/validateToken', verifyToken, (req, res) => {
  res.status(200).json({ valid: true, user: req.user });
});

// Protected route (example)
router.get('/home', verifyToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.email}` });
  });

module.exports = router;
