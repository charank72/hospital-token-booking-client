import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Notifications() {
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
  return (
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Notifications</h2>
          </div>
          <div className="col-12 fs-5">
            <div className="container-fluid shadow d-flex justify-content-between">
              <div className="container">
                <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th className="text-center">S.No</th>
                      <th>Notification Details</th>
                      {/* <th>Accept</th>
                      <th>Notify User</th>
                      <th>Reject</th> */}
                    </tr>
                  </thead>
                  {users &&
                    users.map((item, index) => {
                      return (
                        <tbody>
                          <tr>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <span className="fs-5">{item.name}</span> has
                              requested for you appointment
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Notifications;
