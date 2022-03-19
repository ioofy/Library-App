import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, increment, incrementByAmount } = AuthSlice.actions;

export default AuthSlice.reducer;
