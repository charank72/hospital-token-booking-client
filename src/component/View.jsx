import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function View() {
  const url = "https://hospital-api-lgo3.onrender.com";
  const [user, setUser] = useState({});
  const { id } = useParams();

  const userRead = useCallback(() => {
    const users = async () => {
      await axios
        .get(`/api/doctor/read/${id}`)
        .then((res) => {
          console.log(res);
          setUser(res.data.single);
        })
        .catch((err) => toast.error(err.response.data.msg));
    };
    users();
  }, []);
  useEffect(() => {
    userRead();
  }, []);
  return (
    //  <div className="container ">
    //   <div className="row">
    //     <div className="col-md-12">
    //       <h1 className="text-center mx-auto">
    //         User Details
    //       </h1>
    //     </div>
    //     <div className="container-fluid page shadow bg-light ">
    //       <div className="col-md-4  mx-auto">
    //         <div className="card  mt-5 w-auto">
    //          <div className="card-header">
    //          <div className="card-image text-center">
    //             <img
    //               className="w-50 text-center align-items-center"
    //               src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
    //               alt=""
    //             />
    //            <div>
    //          </div>
    //             <h1>Name:{user.name}</h1>
    //             <h2>Gender:{user.gender}</h2>
    //             <p>Date:{user.updatedAt}</p>
    //            </div>
    //           </div>
    //           <div className="card-body">
    //             <h5>Mobile No:{user.mobile}</h5>
    //             <h5>Issue:{user.issue}</h5>
    //           </div>
    //           <div className="card-footer">
    //             <input className="form-control b-0" placeholder="want to say anthing?" type="text" />
    //             <button className="btn btn-success">Send Message</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //  <div className="container">
    //   <div className="container shadow">
    //   <div class="col-xl-6 col-lg-7 col-md-12">
    //     <div class="card profile-header">
    //       <div class="body">
    //         <div class="row">
    //           <div class="col-lg-4 col-md-4 col-12">
    //             <div class="profile-image w-50 float-md-right">

    //               <img
    //                 src="https://bootdey.com/img/Content/avatar/avatar7.png"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //           <div class="col-lg-8 col-md-8 m-5 col-12">
    //             <h4 class="m-t-0 m-b-0 ">
    //               <strong>Name:{user.name}</strong>
    //             </h4>
    //             <span class="job_post">Mobile No:{user.mobile}</span>
    //             <p>Issue:{user.issue}</p>
    //             <div>
    //               <button class="btn btn-primary btn-round">send</button>
    //               <button class="btn btn-primary btn-round btn-simple">
    //                 Message
    //               </button>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    //  </div>

    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="left">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="right">
            <h1 className="fs-4">{user.name}</h1>
            <small>{user.phone}</small>
          </div>
          <div className="btns d-flex gap-3">
            <button className="btn btn-primary px-5">Reject</button>
            <button className="btn btn-light border px-5">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
