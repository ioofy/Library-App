import axios from 'axios';
import authHeader from 'helper/getAuthHeader';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
    ...authHeader(),
  },
});

const getBooksData = async (take: number) => {
  const response = await apiClient.get(`book?take=${take}&skip=0`);

  return response.data;
};

const editBooksData = async (id: number, title: string) => {
  const response = await apiClient.put(`/book/${id}`, {
    title,
  });

  return response.data;
};

const getBooksById = async (id: number) => {
  const response = await apiClient.get(`book/${id}`);

  return response.data;
};

const addBooksData = async (title: string) => {
  const response = await apiClient.post('/book', {
    title,
  });

  return response.data;
};

const deleteBooksData = async (id: number) => {
  const response = await apiClient.delete(`/book/${id}`);

  return response.data;
};

const shippingCompsService = {
  getBooksData,
  getBooksById,
  editBooksData,
  addBooksData,
  deleteBooksData,
};

export default shippingCompsService;
