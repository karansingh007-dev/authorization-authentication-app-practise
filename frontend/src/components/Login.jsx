import React, { useState } from "react";
import API from "../api"; // Axios instance

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send POST request to backend /auth/login
      const res = await API.post("/auth/login", { email, password });

      // Save JWT token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      // You can redirect to profile page here
    } catch (err) {
      alert(err.response.data.error); // show backend error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
