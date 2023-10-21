import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useEffect, useState } from "react";

//////////////////////////////////////////////////////////////////////////////////////////////////////
const usersApi = createApi({
  reducerPath: "usersAp",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in" }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users?page=1",
    }),
  }),
});

const { useGetAllUsersQuery } = usersApi;
//////////////////////////////////////////////////////////////////////////////////////////////////////
const useTest = () => {
  const { data, error, isLoading, refetch } = useGetAllUsersQuery();
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setUsersData(data.data);
    }
  }, [data]);

  function test() {
    console.log(data);
  }

  return { usersData, test };
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
function Example() {
  const { state, test } = useTest();
  test();
}

const Home = () => {
  return <>{Example()}</>;
};

export default Home;
