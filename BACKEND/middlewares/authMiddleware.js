const jwt = require('jsonwebtoken');

// Middleware to validate JWT token
const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization');

  // If no token is provided
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request (req.user)
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Invalid token
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = verifyToken;
