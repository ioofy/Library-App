import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: object;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserState = {
  user: {},
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },

    getUserSuccess: (state, action: PayloadAction<{}>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
    },

    getUserFail: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { getUserPending, getUserFail, getUserSuccess } = actions;

export default reducer;
