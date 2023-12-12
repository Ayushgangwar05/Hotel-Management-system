import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Sign from "../Components/Sign";
import Mainfile from "./Mainfile";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/Signin" element={<Sign />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Main" element={<Mainfile/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
