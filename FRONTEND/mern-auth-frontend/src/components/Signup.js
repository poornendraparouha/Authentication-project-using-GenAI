import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Container } from 'react-bootstrap';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request to the sign-up API
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/signup`, { email, password });
      
      // Show success toast notification
      toast.success('User registered successfully!', {
        position: 'top-right', // Changed to string
      });

      // Clear form inputs on success
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during signup:', error); // Log the entire error
      // Handle error and show error toast
      const errorMessage = error.response?.data?.message || 'Error during signup';
      toast.error(errorMessage, {
        position: 'top-right', // Changed to string
      });
    }
  };

  return (
    <Container className="mt-5">
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autocomplete="current-password" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* React Toastify container */}
      <ToastContainer />
    </Container>
  );
};

export default Signup;
