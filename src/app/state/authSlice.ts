import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface AuthState {
  data: {
    data: {
      access_token: string | null;
    };
    user: {
      id: number | null;
      name: string | null;
      email: string | null;
      phone_number: number | string | null;
    };
  };
}

const initialState: AuthState = {
  data: {
    data: {
      access_token: null,
    },

    user: {
      id: null,
      name: null,
      email: null,
      phone_number: null,
    },
  },
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<AuthState>
    ) => {
      state.data.user = action.payload.data.user;
      state.data.data = action.payload.data.data;
    },

    defaultState: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, defaultState } =
  AuthSlice.actions;

export default AuthSlice.reducer;
