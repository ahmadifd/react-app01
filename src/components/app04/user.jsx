import { useGetAllUsersQuery } from "./store";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "./store";


const User = () => {
  const routeParams = useParams();
  const { data, error, isLoading, refetch } = useGetUserQuery(routeParams?.id);
  const [user, setuser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);


  useEffect(() => {
    if (data) {
      setuser(data.data);
      console.log(data.data);
    }
  }, [data]);

  if (isLoading) return <h2>Loading ...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="col-4 text-center p-5">
      <img
        src={user?.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />

      <h4>
        {user?.first_name} {user?.last_name}
      </h4>

      <h5>{user?.email}</h5>

      <button
        onClick={() => {
          navigate("/users", { replace: true });
        }}
        className="btn btn-info mt-3"
      >
        Users
      </button>
    </div>
  );
};

export default User;
