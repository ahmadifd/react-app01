import Navbar from "./components/navbar";
import Users from "./components/users";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import User from "./components/user";
import NotFound from "./components/notFound";
import { redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import usersContext from "./context/userscontext";

function App() {
  const [user, setuser] = useState(null);

  async function getApiResult(userid) {
    await axios
      .get(`https://reqres.in/api/users/${userid}`)
      .then((res) => {
        setuser(res.data.data);
        console.log("handleUser", res.data.data);
        localStorage.setItem("userid", res.data.data.id);
      })
      .catch((er) => {
        console.log(er);
        setuser(null);
      });
  }

  function handleUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      setuser(null);
      return;
    }
    getApiResult(5);
  }

  useEffect(() => {
     const userid = localStorage.getItem("userid");
     userid && getApiResult(userid);
  }, []);

  return (
    <>
      <usersContext.Provider
        value={{
          currentUser: user,
          handleUser: handleUser,
        }}
      >
        <Navbar user={user} />
        <div className="container mt-3">
          <Routes>
            <Route path="/users/:id" element={<User xxx={10} />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/customers" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </usersContext.Provider>
    </>
  );
}
// element={(props) => <User {...props} xxx='10' />}
export default App;
