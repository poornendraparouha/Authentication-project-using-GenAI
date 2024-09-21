import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import ProtectedRoute from './auth/protectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected Route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* Default Route */}
        <Route path="/" element={<Signin />} />
        {/* 404 Not Found page */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
