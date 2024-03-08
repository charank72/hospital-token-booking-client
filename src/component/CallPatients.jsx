import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const CallPatients = () => {
  const [users, setUsers] = useState([]);
  const getCallback = useCallback(() => {
    const getUsers = async () => {
      await axios
        .get("/api/doctor/all")
        .then((res) => setUsers(res.data.users));
    };
    getUsers();
  }, []);
  useEffect(() => {
    getCallback();
  }, []);
  const deleteUser = async (id) => {
    await axios
      .delete(`/api/doctor/delete/${id}`)
      .then((res) => toast.success(res.data.msg))
      .catch((err) => toast.error(err.response.data.msg));
    window.location.reload();
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark navbar-expand-md bg-secondary ">
          <div className="container">
            <h1 className="navbar-brand">Home</h1>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={"/callpatients"} className="navbar-brand">
                    View Patients
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/notifications"} className="navbar-brand">
                    Notifications
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/doclogin"} className="navbar-brand">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row">
          {users &&
            users.map((item, index) => {
              return (
                <div className="col col-12 col-lg-4 col-md-4 my-3" key={index}>
                  <div className="card">
                    <div className="text-center">
                      <img
                        className="w-25"
                        src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Patient Name:{item.name}</h5>
                      <h4>Token:{item.token}</h4>
                      <p className="card-text">Email:{item.email}</p>
                      <p className="card-text">Issue:{item.issue}</p>
                    </div>
                    <div className="card-body">
                      <a href={`/view/${item._id}`}>
                        {" "}
                        <button className="btn btn-success w-50">
                          Call patient
                        </button>
                      </a>
                      <button
                        className="btn btn-warning ml-3 w-50
"
                        onClick={() => deleteUser(item._id)}
                      >
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CallPatients;
