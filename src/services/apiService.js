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
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
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
      console.log('Token de Autorização:', token);
  
      const response = await api.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Erro ao excluir produto');
    }
  },

  fetchUser: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token não encontrado');
    }
  
    try {
      const response = await api.get('/api/users/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.success) {
        throw new Error(response.message);
      }
  
      return response.user.name; 
    } catch (error) {
      console.log('Erro ao buscar o nome do usuário:', error);
      throw error;
    }
  },
};

export default apiService;
