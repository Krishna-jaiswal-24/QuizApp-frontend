// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/home" className="text-white text-lg font-bold">
          Language Learning App
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
