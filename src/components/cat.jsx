import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";


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

const Cat = () => {
  const [data, isLoading, isError, error, refetchdata] = useCat();

  useEffect(() => {
    console.log("cat:", data);
  },[data]);

  return (
    <>
      <div className="alert alert-warning"> User - {data?.first_name} - {data?.last_name} - {data?.email} </div>
    </>
  );
};

export default Cat;
