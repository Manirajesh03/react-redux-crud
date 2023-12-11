import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = users.find(
      (user) => user.emailId === emailId && user.password === password
    );

    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      alert("Login Successful");
    } else {
      alert("Wrong Credentials");
    }
    navigate("/dashboard");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-heading">Login</h1>
      <div>
        <label htmlFor="emailId">Email ID*</label>
        <input
          type="email"
          name="emailid"
          value={emailId}
          id="emailId"
          onChange={(e) => setEmailId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>
        <p>
          Not registered yet, please{" "}
          <a className="btn-block" onClick={() => navigate("/signup")}>
            Join Now
          </a>
        </p>
      </div>
    </form>
  );
};

export default Login;
