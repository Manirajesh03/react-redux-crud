import React, { useState, useMemo, useCallback } from "react";
import "./styles.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stateObj = useMemo(() => ({ foo: "bar" }), []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        dispatch({
          type: "REGISTER",
          payload: {
            id: new Date().getTime(),
            firstName,
            middleName,
            lastName,
            emailId,
            address,
            mobileNumber,
            password,
          },
        });
        navigate("/login");
      } else {
        alert("Password & Confirm Password do not match");
      }
    },
    [
      dispatch,
      navigate,
      password,
      confirmPassword,
      firstName,
      middleName,
      lastName,
      emailId,
      address,
      mobileNumber,
    ]
  );

  const users = useSelector((state) => state.users);

  return (
    <div className="signup-form">
      <form className="user-details" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            id="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={middleName}
            id="middleName"
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            id="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emailID">Email ID*</label>
          <input
            type="email"
            name="emailId"
            value={emailId}
            id="emailID"
            required
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Full Address*</label>
          <input
            type="text"
            name="fullAddress"
            value={address}
            id="address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            id="confirmPassword"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Mobile Number*</label>
          <input
            type="number"
            name="mobileNumber"
            value={mobileNumber}
            id="phoneNo"
            required
            minLength={10}
            maxLength={12}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" name="submit">
            Submit
          </button>
        </div>
        <div>
          <button type="reset" name="submit" onClick={() => navigate("/")}>
            Go, Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
