import React, { useRef, useState } from "react";
import imgSrc from "./images/pics";
import "./css/form.css";
import Confirm from "./Confirm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Form() {
  const [isLoading, setIsLoading] = useState(false);
  // const [token, setToken] = useState(null);
  const fname = useRef();
  const femail = useRef();
  const fgender = useRef();
  const fmobile = useRef();
  const fissue = useRef();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let data = {
        name: fname.current.value,
        email: femail.current.value,
        gender: fgender.current.value,
        mobile: fmobile.current.value,
        issue: fissue.current.value,
      };
      console.log(data);
      await axios
        .post("/api/user/details", data)
        .then((res) => {
          console.log(res.data.user);
          // setToken(res.data.user.token);
          setIsLoading(false);
          navigate(`/cnf/${res.data.user.token}`);
        })
        .catch((error) => {});
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) {
    return (
      <div className="loader">
        {/* <div className="spinner"></div> */}
        <img
          src="https://cdn.dribbble.com/users/1859004/screenshots/6046161/gif.gif"
          alt=""
        />
      </div>
    );
  }
  return (
    <div className="container-fluid p-2 p-md-3">
      <div className="container shadow">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="form-left">
              <img
                src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-6359.jpg?w=740&t=st=1707903517~exp=1707904117~hmac=a6936d78bb44cd46f5f7a3860e472e778d5c71bb8bc36c32e9c620cd4d13485d"
                alt=""
                className="w-100"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-right p-2 p-md-5">
              <h2>Patient Form</h2>
              <form onSubmit={submitHandler} autoComplete="on">
                <div className="form-group">
                  <label htmlFor="name">Enter your name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    ref={fname}
                    placeholder="Enter name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    ref={femail}
                    id="email"
                    required
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    ref={fgender}
                    className="form-control"
                    name="gender"
                    id="gender"
                  >
                    <option value="null">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Mobile</label>
                  <input
                    type="number"
                    ref={fmobile}
                    name="mob"
                    id="mob"
                    required
                    className="form-control"
                    placeholder="Enter  mobile number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Issue</label>
                  <textarea
                    ref={fissue}
                    className="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
                <div className="ml-3 mb-3">
                  <button
                    type="submit"
                    className="btn btn-warning mt-3 w-100 p-3 fs-5 rounded-4"
                  >
                    Book Appointment
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

export default Form;
