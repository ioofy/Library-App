import axios from 'axios';
import authHeader from 'helper/getAuthHeader';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
    ...authHeader(),
  },
});

export default apiClient;
