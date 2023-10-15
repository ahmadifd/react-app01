import { Route, Navigate } from "react-router-dom";

const Protect = ({ component: Component, ...restProps }) => {
  const token = localStorage.getItem("token");

  return <></>;
};

export default Protect;
