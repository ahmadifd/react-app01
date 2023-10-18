import { useGetAllUsersQuery } from "./store";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
  const { data, error, isLoading, refetch } = useGetAllUsersQuery();
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (data) {
      setUsersData(data.data);
      console.log(data.data);
    }
  }, [data]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error?.message}</div>}
      {usersData &&
        usersData.map((item) => {
          return (
            <>
              <div keys={"dv" + item.id} className="col-4 text-center p-5">
                <img
                  keys={"img" + item.id}
                  src={item.avatar}
                  style={{ borderRadius: "50%", width: "100px" }}
                  alt=""
                />
              </div>
            </>
          );
        })}
    </>
  );
};

export default Users;
