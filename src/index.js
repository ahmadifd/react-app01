import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import App00 from "./App00";
import App01 from "./App01";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    {/* <React.StrictMode> */}
      <App01 />
    {/* </React.StrictMode> */}
  </>
);
