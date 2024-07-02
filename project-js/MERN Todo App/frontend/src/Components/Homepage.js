import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Adduser"; // Import the CSS file
import "../App"; // Import the CSS file

const Homepage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [flag]);

  const deleteHandler = (_id) => {
    console.log("id", _id);
    let payload = {
      _id,
    };
    axios
      .delete("http://localhost:8080/", { data: payload })
      .then((res) => setFlag(!flag))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/add-user")} className="button">
        Add User
      </button>
      <button onClick={() => navigate("/edit-user")} className="button">
        Edit User
      </button>
      <div className="title">Homepage</div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.userName}</td>
                <td>{post.mobile}</td>
                <td
                  className="delete-button"
                  onClick={() => deleteHandler(post._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
