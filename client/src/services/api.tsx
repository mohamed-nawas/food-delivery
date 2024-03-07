import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:8080/food-delivery',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
