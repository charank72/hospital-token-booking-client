import React, { useRef } from "react";
import "./css/form.css";
import axios from "axios";
import imgSrc from "./images/pics.js";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function DocLogin() {
  const navigate = useNavigate();
  const femail = useRef();
  const fpass = useRef();

  const auth = async (doc, e) => {
    await axios.post("/api/doctor/doclogin", doc).then((res) =>toast.success(res.data.msg));
    navigate("/callpatients")
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email: femail.current.value,
        password: fpass.current.value,
      };
      console.log(data);
      auth(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid page page p-2 p-md-3">
      <div className="container mt-3 shadow">
        <div className="row ">
          <div className="col-12 col-md-6 my-auto">
            <div className="form-left">
              <img src={imgSrc.pht9} className="w-100" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 my-auto">
            <div className="form-right p-2 p-md-5">
              <h2>Login</h2>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    ref={femail}
                    name="email"
                    id="email"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">password</label>
                  <input
                    type="password"
                    name="pass"
                    ref={fpass}
                    id="pass"
                    required
                    className="form-control"
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-success mt-2 p-3 w-75 rounded-3 fs-5">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocLogin;
