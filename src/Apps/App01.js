import Navbar from "../components/app01/navbar";
import Users from "../components/app01/users";
import Login from "../components/app01/login";
import Register from "../components/app01/register";
import Home from "../components/app01/home";
import User from "../components/app01/user";
import NotFound from "../components/app01/notFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "../components/app01/dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import usersContext from "../components/app01/context/userscontext";
import Logout from "../components/app01/logout";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GetUser from "../components/app01/getuserReducer";
import { Form } from "../components/app01/formreducer";
import { Provider } from "react-redux";
import { Contact } from "../components/app01/contact";
import { Login2 } from "../components/app01/login2";
import { store } from "../components/app01/Store";
import { Link } from "react-router-dom";
import UserRedux from "../components/app01/userredux";
import UserRedux2 from "../components/app01/userredux2";
import { useParams } from "react-router-dom";

function App01() {
  const routeParams = useParams();
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
      mutations: {},
    },
  });

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

  useEffect(() => {
    //console.log("user Changed");
  }, [user]);

  return (
    <>
      <div className="text-center border border-2 bg-light border-info rounded-5  m-3">
        <h2>Header</h2>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/userredux/:id?" element={<UserRedux />} />
              <Route path="/userredux2/:id?" element={<UserRedux2 />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
      <usersContext.Provider
        value={{
          currentUser: user,
          handleUser: handleUser,
        }}
      >
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Navbar user={user} />
            <div className="container mt-3">
              <Routes>
                <Route path="/users/:id" element={<User xxx={10} />} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/notFound/:name/:id?" element={<NotFound />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/form" element={<Form />} />

                <Route path="/getuser/:id?" element={<GetUser />} />
                <Route
                  path="/dashboard"
                  element={user ? <Dashboard /> : <Login />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </usersContext.Provider>
      <div className="text-center border border-2 bg-light border-info rounded-5  m-3">
        <h2>Footer</h2>
        <Provider store={store}>
          <BrowserRouter>
            <Link to="/login2">login</Link> |<Link to="/contact">contact</Link>
            <Routes>
              <Route path="/login2" element={<Login2 />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}
// element={(props) => <User {...props} xxx='10' />}
export default App01;
