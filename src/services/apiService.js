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

};

export default apiService;
