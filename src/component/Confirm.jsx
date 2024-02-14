import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./css/confirm.css";
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
                src="https://media1.tenor.com/images/22919ad969d4fcf8280c47f4c4d6a643/tenor.gif?itemid=15903843"
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <p className="display-3 fw-bold">
                <small>Token </small>
                <span className="text-warning">{id}</span>
              </p>
              <small className="card-title lead text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores tenetur placeat veniam ex ullam, assumenda labore
                doloremque doloribus aliquid illo. Eligendi iusto dolore nobis
                tempora rerum. Accusamus repellendus natus nostrum!
              </small><br/>
             <button className="btn btn-success">
             <NavLink className='nav-link' to={`/home/${id}`}> Go to home</NavLink>
             </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
