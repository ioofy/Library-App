import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  isError: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isAuth: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
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
    authFail: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { authPending, authSuccess, authFail } = actions;

export default reducer;
