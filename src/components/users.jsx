import axios from "axios";
import { useState, useEffect } from "react";
import LoadingUsers from "./loading/loadingUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";

const Users = () => {
  const [allusers, setallusers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      getapiresult();
    }, 500);
  }, []);
  async function getapiresult() {
    const result = await axios.get("https://reqres.in/api/users?page=1");
    setallusers(result.data.data);
    setisLoading(false);
    console.log(result.data.data);
  }

  return (
    <>
      <button onClick={handleCreate} className="btn btn-lg btn-primary">
        Create
      </button>
      <div className="row">
        {isLoading ? (
          <LoadingUsers />
        ) : (
          allusers.map((item) => {
            return (
              <>
                <div className="col-4 text-center p-5">
                  <img
                    src={item.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                  />
                  <h4>
                    {item.first_name} {item.last_name}
                  </h4>
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
          })
        )}
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
    const users = [...allusers, newuser];
    const userapi = await axios.post(`https://reqres.in/api/users`, newuser);

    setallusers(users);
    console.log(userapi);
  }
  async function handleUpdate(id) {
    const users = [...allusers];
    let user = users.find((x) => x.id === id);
    user.first_name = "farshad";
    const userapi = await axios.put(`https://reqres.in/api/users/${id}`, user);
    setallusers(users);

    console.log(userapi);
  }

  async function handleDelete(id) {
    const users = allusers.filter((x) => x.id !== id);
    const userapi = await axios.delete(`https://reqres.in/api/users/${id}`);
    setallusers(users);
    console.log(userapi);
  }
};

export default Users;
