import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './css/confirm.css'
import imageSrc from "./images/pics";

function Home() {
  const {id}=useParams();
  return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark m-0 bg-secondary cls mb-3">
        <div className="ml-3">
        <img className="logo" src={imageSrc.pht7} alt="" />
        </div>
        </nav>
        <div className="container-fluid cnf-container bg-light">
      <div className="row ">
        <div className="col-11 mx-auto d-flex justify-content-center align-items-center col-md-4 offset-md-4 col-sm-4 offset-sm-4">
          <div className="card shadow border-0 text-center ">
            <div className="d-flex text-center cen justify-content-center  w-100">
              <img className="w-100"
            src={imageSrc.pht8}
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
