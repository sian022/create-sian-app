import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../redux/reducers/loginSlice";
import { api } from "../redux/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
});

setupListeners(store.dispatch);
