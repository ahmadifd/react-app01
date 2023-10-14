import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";

const useCat = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(["cat"], () => {
    return axios
      .get(`https://reqres.in/api/users/3`)
      .then((res) => res.data.data);
  });

  useEffect(() => {
    console.log("usecat",data);
    },[data]);


  function refetchdata() {
    refetch();
  }
  return [data, isLoading, isError, error, refetchdata];
};

export default useCat;
