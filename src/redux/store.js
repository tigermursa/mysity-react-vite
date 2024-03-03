import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  //??
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(baseApi.middleware),
});
