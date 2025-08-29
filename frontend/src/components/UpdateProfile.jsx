import React, { useState, useEffect } from "react";
import API from "../api";

function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch current user data to pre-fill form
    const fetchUser = async () => {
      try {
        const res = await API.get("/user/me");
        setName(res.data.name);
        setEmail(res.data.email);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    try {
      const res = await API.put("/user/update", { name, email, password });
      setMessage(res.data.message);
      setPassword(""); // clear password field after update
    } catch (err) {
      setMessage(err.response?.data?.error || "Update failed");
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {message && <p>{message}</p>}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateProfile;
