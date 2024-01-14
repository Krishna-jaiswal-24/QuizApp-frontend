import React from "react";
import Navbar from "../components/Navbar";
import QuizPage from "./QuizPage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to the Language Learning Quiz!
        </h1>
        <QuizPage />
      </div>
    </div>
  );
};

export default Home;
