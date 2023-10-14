import useCat from "./components/usecat";

const Cat = () => {
  const [ data, isLoading, isError, error, refetchdata ] = useCat();
  console.log("cat:",data);
  return (
    <>
      <div className="alert alert-warning"> User - {data}</div>
    </>
  );
};

export default Cat;
