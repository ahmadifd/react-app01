import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import queryString from "querystring";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const User = (props) => {
  const routeParams = useParams();
  const ulocation = useLocation();
  const navigate = useNavigate();

  //const [user, setuser] = useState({});
  const [next, setnext] = useState(false);

  const {
    data: apidata,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["user"], () => {
    setnext(!next);
    return axios
      .get(`https://reqres.in/api/users/${!next ? routeParams.id : 5}`)
      .then(
        (res) => res.data.data
        //setuser(res.data.data);
        // console.log("then");
      );
    // .catch((er) => {
    //   // setuser({});
    //   // setisError(true);
    //   // console.log("catch");
    // });
  });

  useEffect(() => {
    //getApiResult();
    const qs = queryString.parse(ulocation.search);
    //console.log(ulocation.search, qs["?order"], qs["s"]);
  }, []);
  // async function getApiResult() {
  //   let user1 = await axios.get(
  //     `https://reqres.in/api/users/${routeParams.id}`
  //   );
  //   setuser(user1.data.data);
  //   console.log(navigate);
  // }

  if (isLoading) return <h2>Loading ...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className="col-4 text-center p-5">
      <img
        src={apidata?.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />

      <h4>
        {apidata?.first_name} {apidata?.last_name}
      </h4>

      <h5>{apidata?.email}</h5>

      <button
        onClick={() => {
          navigate("/users", { replace: true });
        }}
        className="btn btn-info mt-3"
      >
        Users
      </button>
      <button onClick={refetch} className="mt-3 mx-3 btn btn-secondary">
        Refetch
      </button>
    </div>
  );
};

export default User;
