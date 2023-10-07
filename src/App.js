import Navbar from "./components/navbar";
import Users from "./components/users";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/users" Component={Users} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </>
  );
}

export default App;
