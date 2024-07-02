import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Adduser.css"; // Import the CSS file
import "../App"; // Import the CSS file

const Adduser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");

  const AdduserHandler = () => {
    let payload = {
      userName,
      mobile,
    };
    axios
      .post("http://localhost:8080/", payload)
      .then((res) => {
        console.log(res);
        setUserName("");
        setMobile("");
        // alert("User added successfully");
      })
      .catch((err) => {
        console.log(err);
        // alert("Error adding user");
      });
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")} className="button">
        Homepage
      </button>
      <button onClick={() => navigate("/edit-user")} className="button">
        Edit User
      </button>
      <br></br>
      {/* <div className="title">Add User</div> */}
     
      <label>UserName: </label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="input"
      />
     
      <label>Mobile: </label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="input"
      />
      <button onClick={AdduserHandler} className="button">
        Add User
      </button>
    </div>
  );
};

export default Adduser;
