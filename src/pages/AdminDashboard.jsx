// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    // Fetch questions from the server
    axios.get('/api/questions').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const handleAddQuestion = () => {
    // Send a request to add a new question
    axios.post('/api/questions', { question: newQuestion }).then((response) => {
      setQuestions([...questions, response.data]);
      setNewQuestion('');
    });
  };

  const handleDeleteQuestion = (questionId) => {
    // Send a request to delete a question
    axios.delete(`/api/questions/${questionId}`).then(() => {
      setQuestions(questions.filter((question) => question._id !== questionId));
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Add New Question</h3>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      <div>
        <h3>Questions List</h3>
        <ul>
          {questions.map((question) => (
            <li key={question._id}>
              {question.text}{' '}
              <button onClick={() => handleDeleteQuestion(question._id)}>
                Delete Question
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
