import axios from 'axios';

const BASE_URL = 'localhost:3000';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiService = {
  async get(endpoint) {
    try {
      const response = await apiService.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`Error al realizar la solicitud GET a ${endpoint}: ${error.message}`);
    }
  },

  async post(endpoint, data) {
    try {
      const response = await apiService.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error al realizar la solicitud POST a ${endpoint}: ${error.message}`);
    }
  },

  async delete(endpoint) {
    try {
      const response = await apiService.delete(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`Error al realizar la solicitud DELETE a ${endpoint}: ${error.message}`);
    }
  },
};

export default ApiService;