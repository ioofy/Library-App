import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authPending: (state) => {
      state.isLoading = true;
    },

    authSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.isError = false;
    },
    authFail: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { authPending, authSuccess, authFail } = actions;

export default reducer;

