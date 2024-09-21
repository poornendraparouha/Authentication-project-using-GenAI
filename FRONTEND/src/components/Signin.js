import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Container } from 'react-bootstrap';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // React Router hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request to the sign-in API
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/signin`, { email, password });

      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Show success toast and redirect to home page
      toast.success('Signed in successfully!', {
        position:  'top-right',
      });

      // Redirect to the home page
      navigate('/home');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error during sign-in';
      toast.error(errorMessage, {
        position:  'top-right',
      });
    }
  };

  return (
    <Container className="mt-5">
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="email"
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
          Sign In
        </Button>
      </Form>

      {/* React Toastify container */}
      <ToastContainer />
    </Container>
  );
};

export default Signin;
