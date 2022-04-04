import axios from 'axios';

const apiClient = `${process.env.REACT_APP_API_URL}/auth/signin`;

export const authApi = (data: Object): any => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios.post(apiClient, {
        ...data,
      });

      resolve(response.then((res) => res));
    } catch (error) {
      reject(error);
    }
  });
};
