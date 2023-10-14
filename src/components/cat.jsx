import useCat from "./usecat";
import { useEffect } from "react";

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
