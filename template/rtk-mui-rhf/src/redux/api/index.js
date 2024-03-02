import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      // headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Users"],
  endpoints: () => ({}),
});
