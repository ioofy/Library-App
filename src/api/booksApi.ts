import apiClient from "helper/apiClient";

const getBooksData = async (take: number) => {
  const response = await apiClient.get(`/book?take=${take}&skip=0`);

  return response.data;
};

const editBooksData = async (id: number, title: string) => {
  const response = await apiClient.put(`/book/${id}`, {
    title,
  });

  return response.data;
};

const getBooksById = async (id: number) => {
  const response = await apiClient.get(`/book/${id}`);

  return response.data;
};

const addBooksData = async (title: string) => {
  const response = await apiClient.post("/book", {
    title,
  });

  return response.data;
};

const deleteBooksData = async (id: number) => {
  const response = await apiClient.delete(`/book/${id}`);

  return response.data;
};

const bookService = {
  getBooksData,
  getBooksById,
  editBooksData,
  addBooksData,
  deleteBooksData,
};

export default bookService;
