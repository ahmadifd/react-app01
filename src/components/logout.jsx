import { useEffect } from "react";
import usersContext from "../context/userscontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const uc = useContext(usersContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (localStorage.getItem("userid")) {
      localStorage.removeItem("userid");
    }
    uc.handleUser();
    navigate("/", { replace: true });
  }, []);
  return null;
};

export default Logout;
