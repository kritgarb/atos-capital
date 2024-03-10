import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

const apiService = {
  registerUser: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  loginUser: async (userData) => {
    try {
      const response = await api.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  fetchProducts: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token não encontrado. Faça login para obter um token válido.');
    }

    try {
      const response = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default apiService;
