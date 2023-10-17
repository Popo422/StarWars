import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi", //name ng api slice
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL
  }),
  credentials: "same-origin", 
  tagTypes: ["Characters"], //basically parang eto ung state name
  endpoints: (builder) => ({
    getCharacters: builder.query({
      //custom fetch hook 
      query: () => `api/characters`, //path set in router
      providesTags: ["Characters"],
    }),
  }),
});
export default api;
export const { useGetCharactersQuery } = api; //use + GetCharacters + Query
