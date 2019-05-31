import axios from 'axios';
const API_KEY =`${process.env.REACT_APP_API_KEY}`;
const api = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3/',
  headers: { Authorization: `Bearer ${API_KEY}` },
});

export default api;
