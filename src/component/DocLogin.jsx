import React from "react";
import './css/form.css'
import imgSrc from './images/pics.js'
function DocLogin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 text-center">
          <h2>Login</h2>
        </div>
        <div className="wrapper">
          <div className="left">
            <img src={imgSrc.pht3} alt="" />
          </div>
          <div className="right">
          <div className="col col-10">
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
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
                id="pass"
                required
                className="form-control"
              />
            </div>
            <div>
              <button className="btn btn-success mt-2">
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
