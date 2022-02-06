import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../features/api-slice';
import selectProductReducer from '../features/products-slice';

export const store = configureStore({
  reducer: {
    selectProduct: selectProductReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;