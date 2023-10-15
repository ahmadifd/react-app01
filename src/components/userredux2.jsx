import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../Store";

const UserRedux2 = () => {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userredux2);

  useEffect(() => {
    dispatch(getApi());
  }, []);
  if (selector.loading) {
    return (
      <>
        <div>loading ...</div>
      </>
    );
  }

  if (selector.error) {
    return (
      <>
        <h1>{selector.error.message}</h1>
      </>
    );
  }

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

export default UserRedux2;
