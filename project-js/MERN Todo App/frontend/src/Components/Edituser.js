import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App"; // Import the CSS file

const Edituser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const editHandler = (e, _id, key) => {
    const editedData = user.find((item) => item._id === _id);
    let payload = { ...editedData, [key]: e.target.innerHTML };

    axios.put("http://localhost:8080/", payload).then((res) => {
      setUser((prevState) =>
        prevState.map((item) => (item._id === _id ? payload : item))
      );
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <button onClick={() => navigate("")} className="button">
        Homepage
      </button>
      <button onClick={() => navigate("/edit-user")} className="button">
        Add User
      </button>
      <div className="title">Edit User</div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th className="th">Id</th>
            <th className="th">Username</th>
            <th className="th">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((post) => (
              <tr key={post._id}>
                <td className="td">{post._id}</td>
                <td
                  className="td"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => editHandler(e, post._id, "userName")}
                >
                  {post.userName}
                </td>
                <td
                  className="td"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => editHandler(e, post._id, "mobile")}
                >
                  {post.mobile}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edituser;
