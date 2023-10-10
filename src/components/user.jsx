import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import queryString from "querystring";

const User = () => {
  const routeParams = useParams();
  const ulocation = useLocation();
  const [user, setuser] = useState({});

  useEffect(() => {
    getApiResult();
    const qs=queryString.parse(ulocation.search);
    console.log(ulocation.search,qs['?order'],qs['s']);
  }, []);
  async function getApiResult() {
    let user1 = await axios.get(
      `https://reqres.in/api/users/${routeParams.id}`
    );
    setuser(user1.data.data);
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
    </div>
  );
};

export default User;
