import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App01 from "./App01";
import App00 from "./App00";
import App02 from "./App02";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    {/* <React.StrictMode> */}
    <App02 />
    {/* </React.StrictMode> */}
  </>
);
