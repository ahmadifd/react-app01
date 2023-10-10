import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  axios.defaults.headers.common["token"] = localStorage.getItem("token");

  useEffect(() => {
    getApiResult();
  }, []);

  async function getApiResult() {
    await axios.get("https://reqres.in/api/unknown").then((res) => {
      console.log(res);
    });
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
