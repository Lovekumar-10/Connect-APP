// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this if your backend is running on a different port
});

export default axiosInstance;
