import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import authReducer from '../state/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from 'api/authApi';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import persistReducer from 'redux-persist/es/persistReducer';

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  reducers
);

export const store = configureStore({
  reducer: {
    persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<
  typeof store.getState
>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
