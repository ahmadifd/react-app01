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
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users?page=1",
    }),
    getUser: builder.query({
      query: (id) => `/api/users/${id}`,
    }),
    addUser: builder.mutation({
      query: (data) => {
        return { url: `/api/users`, body: { data }, method: "POST" };
      },
    }),
    updateUser: builder.mutation({
      query: (id, data) => {
        return { url: `/api/users/${id}`, body: { data }, method: "PUT" };
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return { url: `/api/users/${id}`, method: "DELETE" };
      },
    }),
  }),
});
export const { useGetAllUsersQuery, useGetUserQuery, useAddUserMutation, useUpdateUserMutation,useDeleteUserMutation} =
  usersApi;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});
