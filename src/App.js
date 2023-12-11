import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdateUserDetails from "./components/UpdateUserDetails";
import DeleteUser from "./components/DeleteUser";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/update" element={<UpdateUserDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
