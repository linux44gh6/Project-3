import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store"; 

const baseQuery = fetchBaseQuery({
  baseUrl: "https://project-3-back-end.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token; 
    if (token) {
      headers.set("Authorization", `Bearer ${token}`); 
    }
    return headers;
  },
});
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}), 
});

export default baseApi;
