import { Data } from "../components/app04/Data";
import { store, usersApi } from "../components/app04/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "../components/app04/store";
import Users from "../components/app04/users";
import User from "../components/app04/user";
import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
