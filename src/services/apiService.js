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
      throw new Error(error.response.data.message || 'Error registering user');
    }
  },

  loginUser: async (userData) => {
    try {
      const response = await api.post('/auth/login', userData);
      return response
    } catch (error) {
      console.log(error.message)
    }
  },

  fetchProducts: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please log in to get a valid token.');
    }

    try {
      const response = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching products');
    }
  },

  editProduct: async (productId, updatedData) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Access token not provided');
    }

    try {
      const response = await api.put(`/products/${productId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error editing product');
    }
  },

  deleteProduct: async (productId) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Authorization Token:', token);
  
      const response = await api.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error deleting product');
    }
  },

  fetchUserData: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
  
    try {
      const response = await api.get('/api/users/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response.data; 
    } catch (error) {
      console.log('Error fetching user:', error);
      throw new Error(error.response.data.message || 'Error fetching user');
    }
  },

  registredProduct: async (produtoData) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Access token not provided');
    }

    try {
      const response = await api.post('/products', produtoData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error creating product');
    }
  },
};

export default apiService;
