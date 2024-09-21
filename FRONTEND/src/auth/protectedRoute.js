import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/validateToken`, {
          headers: {
            Authorization: token,
          },
        });
        setIsAuthenticated(response.data.valid); // Set to true if token is valid
      } catch (error) {
        setIsAuthenticated(false); // Set to false if token validation fails
        localStorage.removeItem('token'); // Remove invalid token
      }
    };

    validateToken();
  }, [token]);

  // If isAuthenticated is null, wait until token validation is complete
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to sign-in page
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // If authenticated, allow access to the protected route
  return children;
};

export default ProtectedRoute;
