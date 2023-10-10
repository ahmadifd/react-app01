import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import axios from "axios";

const Login = () => {
  let email1 = useRef(null);
  let password1 = useRef(null);
  const [account, setAccount] = useState({});

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email">Email:</label>
        <input
          onChange={(event) => {
            setAccount({...account , email: event.target.value });
          }}
          ref={email1}
          type="text"
          id="email"
          className="form-control"
          type="text"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          className="form-control"
          type="password"
          ref={password1}
          onChange={(event) => {
            setAccount({...account ,  password: event.target.value  });
          }}
        />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
  function handleSubmit(event) {
    event.preventDefault();

    getApiResult();
  }
  async function getApiResult() {
    if (account.email && account.password) {
      let user = {
        email: account.email, // email1.current.value,
        password: account.password , //password1.current.value,
      };
      let user1 = await axios.post("https://reqres.in/api/login", user);
      console.log(user1.data);
    }
  }
};

export default Login;
