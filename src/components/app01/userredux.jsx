import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fCALL_API, fSUCCESS, fERROR } from "./Store";

const UserRedux = () => {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userredux);

  useEffect(() => {
    const getApi = async () => {
      dispatch(fCALL_API());
      await axios
        .get(
          `https://reqres.in/api/users/${routeParams.id ? routeParams.id : 5}`
        )
        .then((res) => {
          dispatch(fSUCCESS({ data: res.data.data }));
        })
        .catch((er) => {
          dispatch(fERROR({ error: er }));
        });
    };
    getApi();
  }, []);

  if (selector.data.loading) {
    console.log("loading");
    return (
      <>
        <div>loading ...</div>
      </>
    );
  }

  if (selector.data.error) {
    console.log("error");

    return (
      <>
        <div className="alert alert-danger"></div>
        {selector.error.map((item) => {
          return <li>{item}</li>;
        })}
      </>
    );
  }

  console.log("success");

  return (
    <>
      <div>
        <img
          src={selector?.data?.avatar}
          style={{ borderRadius: "50%", width: "100px" }}
          alt=""
        />

        <h4>
          {selector?.data?.first_name} {selector?.data?.last_name}
        </h4>

        <h5>{selector?.data?.email}</h5>
      </div>
    </>
  );
};

export default UserRedux;
