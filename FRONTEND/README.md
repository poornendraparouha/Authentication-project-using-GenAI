# Frontend - React Authentication App

This is the frontend for the MERN stack authentication app built with React and Bootstrap. The app allows users to sign up, sign in, and manage their sessions using JWT tokens stored in `localStorage`.

## Features

- User Sign Up and Sign In
- JWT-based authentication
- React Router for navigation
- Protected routes
- Responsive UI using Bootstrap
- Logout functionality with token removal

## Tech Stack

- **React**: UI library
- **Bootstrap**: For styling
- **Axios**: For making HTTP requests
- **React Router v6**: For routing and protected routes
- **React Toastify**: For notifications

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/poornendraparouha/FullStack-Authentication-project.git
   cd FRONTEND
2. **Install dependencies**:
    npm install

3. **Set up environment variables**:
    Create a .env file in the root directory and add the backend URL
-    REACT_APP_API_URL=http://localhost:5000

4. **Run the app**:
    npm start

## Folder Structure

```bash
src/
  ├── api/
  │   └── axiosConfig.js
  ├── auth/
  │   └── ProtectedRoute.js
  ├── components/
  │   ├── Signup.js
  │   ├── Signin.js
  │   ├── Home.js
  │   ├── Navbar.js
  │   └── NotFound.js
  ├── App.js
  ├── index.js
  └── routes.js

```
- App.js: Contains the routes and integrates the AppNavbar.
- Navbar.js: Renders the Navbar with the logout button.
- ProtectedRoute.js: Protects routes by checking if the JWT token is valid.
- Signup.js & Signin.js: Contains forms for sign-up and sign-in functionalities.

## Available Scripts
- npm start: Runs the app in development mode.
- npm run build: Builds the app for production.

## Usage
1. Sign up or sign in.
2. JWT token will be stored in localStorage.
3. Access the home page, which is protected by token-based authentication.
4. Logout will remove the token and redirect to the sign-in page.