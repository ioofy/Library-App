import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },

    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isError = false;
    },

    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { getUserPending, getUserFail, getUserSuccess } = actions;

export default reducer;
