import { getToken } from 'utils/getToken';

const authHeader = () => {
  if (getToken) {
    const bearerToken = `Bearer ${getToken}`;

    return {
      Authorization: bearerToken,
    };
  } else {
    return {
      Authorization: '',
    };
  }
};

export default authHeader;
