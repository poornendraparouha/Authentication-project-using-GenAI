# Backend - Express Authentication API

This is the backend for the MERN stack authentication app. It provides REST APIs for user sign-up, sign-in, and token validation using JWT.

## Features

- User Sign Up and Sign In
- Password encryption using bcrypt
- JWT-based authentication
- Middleware for token verification

## Tech Stack

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB Atlas**: Cloud NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: For creating and verifying tokens
- **bcrypt**: For password hashing

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account or a locally installed MongoDB instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/mern-auth-backend.git
   cd mern-auth-backend


2. **Install dependencies**:
    npm install

3. **Set up environment variables**:

    Create a `.env` file in the root directory with the following variables:
-   MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/myDatabase
-   JWT_SECRET=your_jwt_secret
-   PORT=5000


4. **Run the server**:
    npm run dev

## API Endpoints
- POST /api/users/signup: Create a new user.
- POST /api/users/signin: Sign in an existing user and return a JWT.
- GET /api/users/validateToken: Validate JWT token and return the user data.

## Folder Structure
```bash

backend/
├── config/
│   └── db.js                  # MongoDB connection
├── controllers/
│   └── signinController.js       # Logic for user sign-in 
│   └── signupController.js       # Logic for user sign-up 
├── middlewares/
│   └── authMiddleware.js       # JWT token verification middleware
├── models/
│   └── User.js                 # Mongoose user schema and model
├── routes/
│   └── userRoutes.js           # User-related authentication routes
├── .env                        # Environment variables (not in repo)
├── package.json                # Project configuration and dependencies
├── server.js                   # Entry point for the app
└── README.md                   # Project documentation
```

## Available Scripts

- npm run dev: Runs the app in development mode with automatic restart on file changes.
- npm start: Runs the app in production mode.

## API Usage

- **Sign Up**: Make a POST request to /api/users/signup with email and password in the body.
- **Sign In**: Make a POST request to /api/users/signin with email and password in the body. On success, it returns a JWT token.
- **Validate Token**: Make a GET request to /api/users/validateToken with the JWT token in the Authorization header.

## Security

- **Password Hashing**: User passwords are hashed using bcrypt before being stored in MongoDB.
- **JWT**: The backend uses JWT to manage user sessions. The token is sent back to the frontend and is used to authenticate protected routes.