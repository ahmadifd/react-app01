import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import axios from "axios";
import * as yup from "yup";

const Login = () => {
  let email1 = useRef(null);
  let password1 = useRef(null);
  const [account, setAccount] = useState({});
  const { email, password } = account;

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

  return (
    <>
      {account.errors && account.errors.length !== 0 && (
        <div className="alert alert-danger">
          {account.errors.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={({ target }) => {
              setAccount({ ...account, email: target.value });
            }}
            ref={email1}
            type="text"
            id="email11"
            className="form-control"
            type="text"
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="text"
            id="password11"
            className="form-control"
            type="password"
            ref={password1}
            onChange={(event) => {
              setAccount({ ...account, password: event.target.value });
            }}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    await validate();
  }

  async function getApiResult() {
    let user = {
      email: email, // email1.current.value,
      password: password, //password1.current.value,
    };

    let user1 = await axios.post("https://reqres.in/api/login", user);
    console.log(user1);
  }

  async function validate() {
    try {
      await schema.validate(account, { abortEarly: false });
      try {
        await getApiResult();
        setAccount({ ...account, errors: [] });
      } catch (er) {
        setAccount({ ...account, errors: [er.message] });
      }
    } catch (error) {
      setAccount({ ...account, errors: error.errors });
    }
  }
};

export default Login;
