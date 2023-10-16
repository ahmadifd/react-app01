import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usersContext from "./context/userscontext";
import { useContext } from "react";

const Login = ({ handleUser }) => {
  //////////////////////////////useRef/////////////////////////////////

  let email1 = useRef(null);
  let password1 = useRef(null);

  //////////////////////////////useNavigate/////////////////////////////////

  const navigate = useNavigate();

  //////////////////////////////useState/////////////////////////////////

  const [account, setAccount] = useState({
    email: "",
    password: "",
    errors: [],
  });
  const [isSending, setisSending] = useState(false);
  const { email, password } = account;

  //////////////////////////////useEffect/////////////////////////////////

  useEffect(() => {});

  const uc = useContext(usersContext);

  //////////////////////////////schema/////////////////////////////////

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

  //////////////////////////////return/////////////////////////////////

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
            onChange={emailChange}
            ref={email1}
            id="email11"
            className="form-control"
            type="text"
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="password"
            id="password11"
            className="form-control"
            ref={password1}
            onChange={passwordChange}
          />
        </div>
        <button disabled={isSending} className="btn btn-primary ">
          Login
        </button>
      </form>
    </>
  );
  //////////////////////////////emailChange/////////////////////////////////

  function emailChange({ target }) {
    let account1 = { ...account };
    account1.email = target.value;
    setAccount(account1);
  }
  //////////////////////////////passwordChange/////////////////////////////////

  function passwordChange(event) {
    let account1 = { ...account };
    account1.password = event.target.value;
    setAccount(account1);
  }

  //////////////////////////////handleSubmit/////////////////////////////////

  async function handleSubmit(event) {
    event.preventDefault();
    setisSending(true);
    await validate().then(async (res) => {
      res && (await getApiResult());
    });
  }

  //////////////////////////////getApiResult/////////////////////////////////

  async function getApiResult() {
    let user = {
      email: email, // email1.current.value,
      password: password, //password1.current.value,
    };
    let user1 = await axios
      .post("https://reqres.in/api/login", user)

      .then((res) => {
        setAccount({ ...account, errors: [] });
        setisSending(false);

        localStorage.setItem("token", res.data.token);

        uc.handleUser();
        navigate("/dashboard", { replace: true });
      })

      .catch((er) => {
        setAccount({ ...account, errors: [er.message] });
        setisSending(false);
      });
    return user1;
  }

  //////////////////////////////////validate/////////////////////////////

  async function validate() {
    try {
      await schema.validate(account, { abortEarly: false });
      return true;
    } catch (error) {
      console.log(error);
      let accout1 = { ...account };
      accout1.errors = error.errors;
      setAccount(accout1);
      setisSending(false);
      return false;
    }
  }
  //////////////////////////////////End/////////////////////////////
};

export default Login;
