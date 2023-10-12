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

  const [user, setuser] = useState({});

  const qeury = useQuery("user", () => {
    axios.get(`https://reqres.in/api/users/${routeParams.id}`).then((res) => {
      setuser(res.data.data);
      console.log(navigate);
    });
  });

  useEffect(() => {
    console.log(props);
    getApiResult();
    const qs = queryString.parse(ulocation.search);
    console.log(ulocation.search, qs["?order"], qs["s"]);
  }, []);
  async function getApiResult() {
    let user1 = await axios.get(
      `https://reqres.in/api/users/${routeParams.id}`
    );
    setuser(user1.data.data);
    console.log(navigate);
  }

  return (
    <div className="col-4 text-center p-5">
      <img
        src={user.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />

      <h4>
        {user.first_name} {user.last_name}
      </h4>

      <h5>{user.email}</h5>
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
