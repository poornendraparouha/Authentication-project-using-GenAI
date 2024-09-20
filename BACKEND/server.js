const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import connectDB
const userRoutes = require('./routes/userRoutes'); // Import user routes

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Call connectDB to initiate the MongoDB connection
connectDB();

// Use the user routes
app.use('/api/users', userRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Authentication Backend!');
});

// Use environment variable for port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
