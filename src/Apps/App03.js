import "../components/app03/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/app03/UserPost/home";
import CreatePost from "../components/app03/UserPost/CreatePost";
import React from "react";
import ReactDOM from "react-dom/client";
import "../components/app03/index.css";

import "antd/dist/reset.css";
import { Provider } from "react-redux";
import store from "../components/app03/redux/store";

const App03 = () => {
  return (
    <>
      return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createPost" element={<CreatePost />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
      );
    </>
  );
};

export default App03;
