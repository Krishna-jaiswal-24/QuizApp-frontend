// src/components/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import QuizPage from "./QuizPage";

const Home = () => {
  return (
    <div>
      <Navbar />

      <QuizPage />
    </div>
  );
};

export default Home;
