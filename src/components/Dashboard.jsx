import React, { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser]);

  return (
    <>
      <h1>User Dashboard</h1>

      <div className="signup-form dashboard">
        <ul>
          <li>Emaild: {loggedInUser?.emailId}</li>
          <li>First Name: {loggedInUser?.firstName}</li>
          <li>Last Name: {loggedInUser?.lastName}</li>
          <li>Mobile Number: {loggedInUser?.mobileNumber}</li>
        </ul>
      </div>
      <div className="btn-container">
        <button onClick={() => navigate("/update")}>Update</button>
        <button onClick={() => navigate("/delete")}>Delete</button>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
