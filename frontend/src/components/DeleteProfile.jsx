import React, { useState } from "react";
import API from "../api";

function DeleteProfile() {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      await API.delete("/user/delete");
      // Clear JWT token after deletion
      localStorage.removeItem("token");
      setMessage("Account deleted successfully.");

      // Optionally, redirect to signup/login page
      window.location.href = "/login";
    } catch (err) {
      setMessage(err.response?.data?.error || "Deletion failed");
    }
  };

  return (
    <div>
      <h2>Delete Profile</h2>
      {message && <p>{message}</p>}
      <button
        onClick={handleDelete}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Delete Account
      </button>
    </div>
  );
}

export default DeleteProfile;
