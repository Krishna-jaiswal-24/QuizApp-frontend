import React from "react";
import { Link, redirect } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance.js";
const Navbar = () => {
  const handleLogout = async () => {
    try {
      console.log(localStorage.getItem("accessToken"));

      await axiosInstance.post("/api/users/logout");
      return redirect("/login");
    } catch (error) {
      console.error("Logout failed:", error.response.data);
    }
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/home" className="text-white text-lg font-bold">
          Language Learning App
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
