import React from "react";
import { NavLink } from "react-router-dom";

const CallPatients = () => {
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
                  <NavLink to={"#"} className="navbar-brand">
                    Today Appointments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"#"} className="navbar-brand">
                    Total Patients
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"#"} className="navbar-brand">
                    Call Patients
                  </NavLink>
                  <NavLink to={"#"} className="navbar-brand">
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
          <div className="col col-11 col-lg-4 col-md-6 mt-3">
            <div className="card">
              <div className="text-center">
                <img
                  className="card-img-top"
                  src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Patient Name:</h5>
                <p className="card-text">Email:</p>
                <p className="card-text">Issue:</p>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">
                  <button className="btn btn-success">
                    <i className="bi bi-telephone"></i>
                  </button>
                </a>
                <a href="#" className="card-link">
                  <button className="btn btn-danger">
                    <i className="bi bi-bell"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPatients;
