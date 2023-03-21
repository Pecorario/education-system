import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
  try {
    const token = localStorage.getItem('token') || '';

    if (token !== '') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default api;
