import React from "react";
import axios from "axios";

const LogoutButton = () => {


  const handleLogout = async () => {
    try {
      console.log("Button Clicked....")
      // Make a GET request to the logout endpoint
      const response = await axios.get("/logout");
      // Handle success
      console.log(response.data.message);
      // Redirect or perform any action after logout
      window.location.href = '/';

    } catch (error) {
      // Handle error
      console.error("Logout error:", error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
