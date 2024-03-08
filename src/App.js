import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confirm from "./component/Confirm";
import DocLogin from "./component/DocLogin";
import DoctorDashboard from "./component/DoctorDashboard";
import CallPatients from "./component/CallPatients";
import { ToastContainer } from "react-toastify";
import Home from "./component/Home";
import Notifications from "./component/Notifications";
import View from "./component/View";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer autoClose={4000} position={"top-right"} />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/doclogin" element={<DocLogin />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/cnf/:id" element={<Confirm />} />
          <Route path="/docdashboard" element={<DoctorDashboard />} />
          <Route path="/callpatients" element={<CallPatients />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
