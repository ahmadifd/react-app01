import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App00 from "./Apps/App00";
import App01 from "./Apps/App01";
import App02 from "./Apps/App02";
import App03 from "./Apps/App03";
import App04 from "./Apps/App04";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    {/* <React.StrictMode> */}
    <App04 />
    {/* </React.StrictMode> */}
  </>
);
