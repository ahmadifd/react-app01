import Axios from "axios";
import { useReducer, useState } from "react";
import { GetUserReducer, initialState } from "./getuserReducer";
import { ACTION_TYPES } from "./getuserAction";

export const GetUser = () => {
  // const [loading, setLoading] =useState(false)
  // const [fact, setFact] =useState("")
  // const [error, setError] =useState(false)

  // Fetch_start   : loading :true
  // fetch_success : loading: false
  //               : fact : res.data.fact
  //
  // fetch_error   : loading: false
  //               : error  : true

  const {state,  dispatch } = useReducer(GetUserReducer, initialState);

  const handelFetch = () => {
    // dispatch({ type: ACTION_TYPES.Fetch_start });
    Axios.get("https://reqres.in/api/users/5")
      .then((res) => {
        //dispatch({ type: ACTION_TYPES.fetch_success, data: res.data.data });
        console.log(res.data.data);
      })
      .catch((error) => {
        //dispatch({ type: ACTION_TYPES.fetch_error });
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handelFetch}>
        {state?.loading ? "is loading..." : "Fetch Cat Fact"}
      </button>
      {state?.error && <p>Error, some thing is wrong</p>}

      <h1>{state?.data}</h1>
    </div>
  );
};
