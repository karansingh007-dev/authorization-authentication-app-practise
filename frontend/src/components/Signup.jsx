import React, { useState } from "react";
import API from "../api"; // import Axios instance

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Call backend /auth/signup
      const res = await API.post("/auth/signup", { name, email, password });

      // Store JWT in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Signup successful!");
      // You can redirect to login or profile page here
    } catch (err) {
      alert(err.response.data.error); // show error from backend
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
