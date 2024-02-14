import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confirm from "./component/Confirm";
import DocLogin from "./component/DocLogin";
import DoctorDashboard from "./component/DoctorDashboard";
import CallPatients from "./component/CallPatients";
import Home from "./component/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/doclogin" element={<DocLogin />} />
          <Route path="/cnf/:id" element={<Confirm />} />
          <Route path="/docdashboard" element={<DoctorDashboard />} />
          <Route path="/callpatients" element={<CallPatients />} />
          <Route path="/home/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
