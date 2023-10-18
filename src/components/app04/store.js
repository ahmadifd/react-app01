import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const productsApi = createApi({
  reducerPath: "productsAp",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usersApi = createApi({
  reducerPath: "usersAp",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/users" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "?page=1",
    }),
  }),
});
export const { useGetAllUsersQuery } = usersApi;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});
