import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
