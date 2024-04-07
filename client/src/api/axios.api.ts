import axios from 'axios';

export const API_URL = import.meta.env.VITE_APP_API_URL
  ? import.meta.env.VITE_APP_API_URL
  : 'http://localhost:8080/api';

export const instance = axios.create({
  baseURL: API_URL,
});
