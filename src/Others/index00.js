import React from "react";
import ReactDOM from "react-dom";

//const element = <h1>Hello World</h1>;
const element = React.createElement("h1", "", "Hello World1");

ReactDOM.render(element, document.getElementById("root"));
