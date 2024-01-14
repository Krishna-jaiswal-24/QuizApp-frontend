// src/pages/RootPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz App!</h1>
        <p className="text-lg mb-4">
          This app is designed to help you improve your language skills through quizzes.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
