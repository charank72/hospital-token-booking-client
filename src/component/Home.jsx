import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './css/confirm.css'

function Home() {
  const {id}=useParams();
  const navigate=useNavigate();
  return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark m-0 bg-secondary cls mb-3">
        <div className="ml-3">
        <img className="logo" src="https://img.freepik.com/free-vector/doctor-office-logo-template_23-2149665623.jpg?w=740&t=st=1707909202~exp=1707909802~hmac=341e2d4f4aa163bfa91f436e689baa44df5ca87f491bfe28e07c61d56a02b0b3" alt="" />
        </div>
        </nav>
        <div className="container-fluid cnf-container bg-light">
      <div className="row ">
        <div className="col-11 mx-auto d-flex justify-content-center align-items-center col-md-4 offset-md-4 col-sm-4 offset-sm-4">
          <div className="card shadow border-0 text-center ">
            <div className="d-flex text-center cen justify-content-center  w-100">
              <img className="w-100"
            src="https://cdn.dribbble.com/users/1092116/screenshots/2871213/bell-done3.gif"
                alt=""
              />
            </div>
            <div className="card-body">
              <p className="display-3 fw-bold fs-3">
                Your appointment is confirmed
                and your token no is 
                <div className="text-center my-4 text-success">{id}</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </header>
    
  );
}

export default Home;
