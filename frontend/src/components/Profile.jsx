import React, { useEffect, useState } from "react";
import API from "../api"; // Axios instance

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // GET request to /user/me
        const res = await API.get("/user/me");
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      }
    };

    fetchUser();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>ID:</strong> {user._id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default Profile;
