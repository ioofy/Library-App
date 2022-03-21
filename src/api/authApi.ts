import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env
      .REACT_APP_API_URL as string,
  }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (body: {
        email: string;
        password: string;
      }) => {
        return {
          url: '/authentication/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useSigninMutation } = authApi;
