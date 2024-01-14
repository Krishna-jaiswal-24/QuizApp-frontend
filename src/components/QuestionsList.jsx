// QuestionsList.js
import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import the trash icon from react-icons

const QuestionsList = ({ questions, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md m-8">
      <h3 className="text-2xl font-semibold mb-4">Questions List</h3>
      {questions.length === 0 ? (
        <p className="text-gray-600">No questions available.</p>
      ) : (
        <ul className="list-disc pl-4">
          {questions.map((question) => (
            <li key={question._id} className="mb-4 flex items-center justify-between">
              <span className="text-lg">{question.text}</span>
              <button
                onClick={() => onDelete(question._id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionsList;
