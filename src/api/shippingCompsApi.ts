import axios from 'axios';
import authHeader from 'helper/authHeader';
import { ApiCompsProps } from 'types/declare';

const apiClient = axios.create({
  baseURL: process.env
    .REACT_APP_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
    ...authHeader(),
  },
});

const getShippingCompsData = async () => {
  const response = await apiClient.get(
    '/finance/shippingComps'
  );

  return response.data;
};

const editShippingCompsData = async (
  id: ApiCompsProps,
  { name }: ApiCompsProps
) => {
  const response = await apiClient.put(
    `/finance/shippingComps/${id}`,
    {
      name,
    }
  );

  return response.data;
};

const addShippingCompsData = async ({
  name,
}: ApiCompsProps) => {
  const response = await apiClient.post(
    '/finance/shippingComps',
    {
      name,
    }
  );

  return response.data;
};

const deleteShippingCompsData = async (
  id: ApiCompsProps
) => {
  const response = await apiClient.delete(
    `/finance/shippingComps/${id}`
  );

  return response.data;
};

const shippingCompsService = {
  getShippingCompsData,
  editShippingCompsData,
  addShippingCompsData,
  deleteShippingCompsData,
};

export default shippingCompsService;
