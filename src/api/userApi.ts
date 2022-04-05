import axios from 'axios';
import apiClient from 'helper/apiClient';
// import authHeader from 'helper/getAuthHeader';

// for react-query
const getUserById = async (userId: number) => {
  const response = await apiClient.get(`/user/${userId}`);

  return response.data;
};

const getMyProfile = async () => {
  const response = await apiClient.get('/user/my/profile');

  return response.data;
};

const userService = {
  getUserById,
  getMyProfile,
};

export default userService;

const apiUrlClient = `${process.env.REACT_APP_API_URL}/user/my/profile`;

export const fetchUser = (): any => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios.get(apiUrlClient, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);

      resolve(response.then((res) => res));
    } catch (error) {
      reject(error);
    }
  });
};
