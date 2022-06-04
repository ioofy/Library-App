import axios from "axios";
import apiClient from "helper/apiClient";

// for react-query
const getUserById = async (userId: number) => {
  const response = await apiClient.get(`/user/${userId}`);

  return response.data;
};

const getMyProfile = async () => {
  const response = await apiClient.get("/user/my/profile");

  return response.data;
};

const apiUrlClient = `${process.env.REACT_APP_API_URL}/user/my/profile`;

export const getUser = (): any => {
  return new Promise((resolve, reject) => {
    try {
      const getToken = sessionStorage.getItem("jwt");

      if (!getToken) {
        reject("No token found");
      }

      const response = axios.get(apiUrlClient, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      resolve(response.then((res) => res.data));
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const userService = {
  getUserById,
  getMyProfile,
};

export default userService;
