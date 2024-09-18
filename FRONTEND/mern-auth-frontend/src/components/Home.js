import React from 'react';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/');
        setMessage(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to MERN Authentication Frontend</h1>
      <p className="text-center">{message}</p>
    </div>
  );
}

export default Home;
