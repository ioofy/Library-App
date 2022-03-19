import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jokolodang.com/api/v1',
  }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (body: {
        email: string;
        password: string;
      }) => {
        return {
          url: '/authentication/login',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useSigninMutation } = authApi;
