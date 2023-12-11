import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <ul className="navbar">
        <li onClick={() => window.location.replace("http://localhost:3000/")}>
          Login
        </li>
        <li
          onClick={() =>
            window.location.replace("http://localhost:3000/signup")
          }
        >
          Registration
        </li>
        <li
          onClick={() =>
            window.location.replace("http://localhost:3000/update")
          }
        >
          Update
        </li>
        <li
          onClick={() =>
            window.location.replace("http://localhost:3000/delete")
          }
        >
          Delete
        </li>
      </ul>
    </>
  );
};

export default Home;
