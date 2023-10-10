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

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/users/:id" element={<User xxx={10} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/customers" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
// element={(props) => <User {...props} xxx='10' />}
export default App;
