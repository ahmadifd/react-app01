import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/functional/products";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    <Products />
  </>
);
