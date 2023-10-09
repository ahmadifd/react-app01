import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const routeParams = useParams();
const [user,setuser]=useState({});
let user1;
  useEffect(() => {
    
      getapiresult();
    
  }, []);
  return (<h1>User - id = {user.first_name}</h1>);

  async function getapiresult() {
    user1 = await axios.get(`https://reqres.in/api/users/${routeParams.id}`);
    setuser(user1.data.data);
console.log(user1);
  }
};

export default User;
