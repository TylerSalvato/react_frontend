import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const csrfTokenMeta = document.querySelector('meta[name=csrf-token]');
  const csrfToken = csrfTokenMeta ? csrfTokenMeta.content : null;

  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }

  return config;
});

export default api;
