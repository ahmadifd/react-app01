import Navbar from "./components/navbar";
import Users from "./components/users";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import User from "./components/user";
import NotFound from "./components/notFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import usersContext from "./context/userscontext";
import Logout from "./components/logout";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GetUser from "./components/getuserReducer";
import { Form } from "./components/formreducer";
import { Provider } from "react-redux";
import { Contact } from "./components/contact";
import { Login2 } from "./components/login2";
import { store } from "./Store";
import { Link } from "react-router-dom";
import { userreduxstore } from "./components/userredux";
import UserRedux from "./components/userredux";

function App() {
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
        <Provider store={userreduxstore}>
          <BrowserRouter>
      
            <Link to="/userredux">login</Link>
            <Routes>
              <Route path="/userredux/:id?" element={<UserRedux />} />
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/login2" element={<Login2 />} />
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
export default App;
