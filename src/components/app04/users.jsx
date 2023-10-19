import {
  useGetAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from "./store";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, error, isError, isLoading, refetch } = useGetAllUsersQuery();
  const [
    AddUser,
    {
      data: adduserdata,
      isError: adduserisError,
      error: addusererror,
      isLoading: adduserisLoading,
    },
  ] = useAddUserMutation();
  const [
    UpdateUser,
    {
      data: updateuserdata,
      isError: updateuserisError,
      error: updateusererror,
      isLoading: updateuserisLoading,
    },
  ] = useUpdateUserMutation();
  const [
    DeleteUser,
    {
      data: deleteuserdata,
      isError: deleteuserisError,
      error: deleteusererror,
      isLoading: deleteuserisLoading,
    },
  ] = useDeleteUserMutation();

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setUsersData(data.data);
    }
  }, [data]);

  // useEffect(() => {}, [error]);

  // if (adduserisError) {
  //   console.log(addusererror);
  // }

  return (
    <>
      <button onClick={handleCreate} className="btn btn-lg btn-primary">
        Create
      </button>
      <div className="row">
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
                  <Link to={`/users/${item.id}`}>
                    <h4>
                      {item.first_name} {item.last_name}
                    </h4>
                  </Link>
                  <h5>{item.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={() => {
                          handleUpdate(item.id);
                        }}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );

  async function handleCreate() {
    const newuser = {
      id: 10,
      email: "george.bluth@reqres.in",
      first_name: "Farshid",
      last_name: "Ahmadi",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    };
    AddUser(newuser);

    const users = [...usersData, newuser];
    setUsersData(users);
  }

  async function handleUpdate(id) {
    let users = [...usersData];
    let user = users.find((x) => x.id === id);
    console.log(user);
    user.first_name = "Farshad";
    //user.last_name = "Ahmadi";
    //UpdateUser(id,user);
    //setUsersData(users);
  }

  async function handleDelete(id) {
    const users = usersData.filter((x) => x.id !== id);
    DeleteUser(id);
    setUsersData(users);
  }
};

export default Users;
