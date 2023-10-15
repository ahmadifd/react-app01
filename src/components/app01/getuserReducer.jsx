import axios from "axios";
import { useReducer, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ACTIONS = {
  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const GetUserReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CALL_API:
      return { ...state, loading: true };
    case ACTIONS.SUCCESS:
      return { loading: false, data: action.data };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.error };
  }
};

const GetUser = () => {
  const routeParams = useParams();
  const [state, dispatch] = useReducer(GetUserReducer, initialState);

  useEffect(() => {
    const getApi = async () => {
      dispatch({ type: ACTIONS.CALL_API });
      await axios
        .get(
          `https://reqres.in/api/users/${routeParams.id ? routeParams.id : 5}`
        )
        .then((res) => {
          dispatch({ data: res.data.data, type: ACTIONS.SUCCESS });
        })
        .catch((er) => {
          dispatch({ error: er, type: ACTIONS.ERROR });
        });
    };
    getApi();
  }, []);

  if (state.loading) {
    console.log("loading");
    return (
      <>
        <div>loading ...</div>
      </>
    );
  }

  if (state.error) {
    console.log("error");
    return (
      <>
        <div className="alert alert-danger"></div>
        {state.error.map((item) => {
          return <li>{item}</li>;
        })}
      </>
    );
  }

  console.log("success");
  return (
    <>
      <img
        src={state?.data?.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />

      <h4>
        {state?.data?.first_name} {state?.data?.last_name}
      </h4>

      <h5>{state?.data?.email}</h5>
    </>
  );
};

export default GetUser;
