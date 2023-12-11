import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const loggedInUser = useSelector((state) => state.loggedInUser);

  const handleDelete = (e) => {
    e.preventDefault();
    if (loggedInUser.password === password) {
      dispatch({ type: "DELETE", id: loggedInUser.id });
      navigate("/login");
    } else {
      alert("Password do not match");
    }
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser]);

  return (
    <form className="login-form" onSubmit={handleDelete}>
      <h1 className="login-heading">Delete Your Account</h1>
      <div>
        <label htmlFor="emailID">Email ID*</label>
        <input
          type="email"
          name="emailid"
          value={loggedInUser?.emailId}
          id="emailId"
        />
      </div>
      <div>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default DeleteUser;
