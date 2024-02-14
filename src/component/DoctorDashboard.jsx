import React from "react";
import { NavLink } from "react-router-dom";
import CallPatients from "./CallPatients";

function DoctorDashboard() {
  return (
    <>
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
    </>
  );
}

export default DoctorDashboard;
