// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = response;
      const { accessToken } = data;

      // Store the access token in localStorage
      console.log(accessToken);
      localStorage.setItem("accessToken", accessToken);
      console.log(localStorage.getItem("accessToken"));
      navigate("/home");
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
