// AddQuestionForm.js
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import check circle icon from react-icons
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddQuestionForm = ({ onSubmit }) => {
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    options: ["", "", "", ""], // Initialize with 4 empty options
    correctAnswer: "",
    difficulty: 1,
  });

  const handleInputChange = (field, value, index) => {
    if (field === "options") {
      const updatedOptions = [...newQuestion.options];
      updatedOptions[index] = value;
      setNewQuestion({
        ...newQuestion,
        options: updatedOptions,
      });
    } else {
      setNewQuestion({
        ...newQuestion,
        [field]: value,
      });
    }
  };

  const handleAddOption = () => {
  // Allow adding options only if there are less than 4
  if (newQuestion.options.length = 4) {
    setNewQuestion({
      ...newQuestion,
      options: [...newQuestion.options, ""],
    });
  } else {
    // Show a notification when reaching the maximum number of options
    toast.info("Maximum number of options reached", {
      position: "top-right",
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};


  const handleRemoveOption = (index) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions.splice(index, 1);
    setNewQuestion({
      ...newQuestion,
      options: updatedOptions,
    });
  };

  return (
    <div className="bg-white p-6 rounded-md  m-8 shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Add New Question</h3>
      <input
        type="text"
        value={newQuestion.text}
        onChange={(e) => handleInputChange("text", e.target.value)}
        className="border rounded p-2 mb-4 w-full"
        placeholder="Enter question text"
      />
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Options</h4>
        {newQuestion.options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={option}
              onChange={(e) =>
                handleInputChange("options", e.target.value, index)
              }
              className="border rounded p-2 mr-2 flex-1"
              placeholder={`Option ${index + 1}`}
            />
            <button
              onClick={() => handleRemoveOption(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <AiOutlineCheckCircle />
            </button>
          </div>
        ))}
        {newQuestion.options.length < 4 && (
          <button
            onClick={handleAddOption}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Option
          </button>
        )}
      </div>
      <input
        type="text"
        value={newQuestion.correctAnswer}
        onChange={(e) => handleInputChange("correctAnswer", e.target.value)}
        className="border rounded p-2 mb-4 w-full"
        placeholder="Enter correct answer"
      />
      <input
        type="number"
        value={newQuestion.difficulty}
        onChange={(e) =>
          handleInputChange("difficulty", parseInt(e.target.value, 10))
        }
        className="border rounded p-2 mb-4 w-full"
        placeholder="Enter difficulty level"
      />
      <button
        onClick={() => onSubmit(newQuestion)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Question
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddQuestionForm;
