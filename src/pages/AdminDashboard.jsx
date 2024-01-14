// AdminDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddQuestionForm from "../components/AddQuestionForm.jsx";
import QuestionsList from "../components/QuestionsList.jsx";

const AdminDashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    // Fetch questions from the server
    axios
      .get("http://localhost:8000/api/exercises/get-all-questions")
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data.data || []);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  const handleAddQuestion = (newQuestion) => {
    // Send a request to add a new question
    axios
      .post("http://localhost:8000/api/exercises/add-question", newQuestion)
      .then((response) => {
        setQuestions([...questions, response.data]);
      });
  };

  const handleDeleteQuestion = (questionId) => {
    // Send a request to delete a question
    axios
      .delete(
        `http://localhost:8000/api/exercises/delete-question/${questionId}`
      )
      .then(() => {
        setQuestions(
          questions.filter((question) => question._id !== questionId)
        );
        setSelectedQuestion(null);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <AddQuestionForm onSubmit={handleAddQuestion} />
      <QuestionsList questions={questions} onDelete={handleDeleteQuestion} />
    </div>
  );
};

export default AdminDashboard;
