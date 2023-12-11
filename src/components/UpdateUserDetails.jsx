import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdateUserDetails = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let users = useSelector((state) => state.loggedInUser);

  useEffect(() => {
    if (!users) {
      navigate("/login");
    }
    setUser(users);
  }, [users]);

  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
    navigate("/dashboard");
  };

  return (
    <>
      <div className="signup-form">
        <form className="user-details" onSubmit={handleSubmit}>
          <h1>Update Your Details</h1>
          <div>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              name="firstname"
              defaultValue={users?.firstName}
              id="firstName"
              required
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              name="middlename"
              defaultValue={users?.middleName}
              id="middleName"
              onChange={(e) => handleInputChange("middleName", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              name="lastname"
              defaultValue={users?.lastName}
              id="lastName"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="emailID">Email ID*</label>
            <input
              type="email"
              name="emailid"
              defaultValue={users?.emailId}
              id="emaild"
              onChange={(e) => handleInputChange("emailId", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Full Address*</label>
            <input
              type="text"
              name="address"
              defaultValue={users?.fullAddress}
              id="address"
              onChange={(e) => handleInputChange("fullAddress", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNo">Mobile Number*</label>
            <input
              type="number"
              name="phoneno"
              defaultValue={users?.mobileNumber}
              id="phoneNo"
              onChange={(e) =>
                handleInputChange("mobileNumber", e.target.value)
              }
            />
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUserDetails;
