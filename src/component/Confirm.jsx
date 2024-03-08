import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./css/confirm.css";
import imageSrc from "./images/pics";
function Confirm() {
  const { id } = useParams();

  return (
    <div className="container-fluid cnf-container py-5 bg-light">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card shadow border-0 rounded-4 overflow-hidden text-center">
            <div className="d-flex justify-content-center">
              <img
                className="w-50"
                src={imageSrc.pht6}
                alt="No Image"
              />
            </div>
            <div className="card-body">
              <p className="display-3 fw-bold">
                <small>Token </small>
                <span className="text-warning">{id}</span>
              </p>
              <small className="card-title lead text-secondary">
                Your token is succesfully generated
              </small><br/>
             <button className="btn btn-success mt-3">
             <NavLink className='nav-link' to={`/home/${id}`}> Go to my notification</NavLink>
             </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
