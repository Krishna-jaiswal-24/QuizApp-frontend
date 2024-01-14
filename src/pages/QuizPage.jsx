// QuizPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizResultPage from "./QuizResultPage.jsx";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showWrongMessage, setShowWrongMessage] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/exercises/get-all-questions")
      .then((response) => {
        const allQuestions = response.data.data || [];

        // Shuffle the array of questions
        const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);

        // Take the first 20 questions
        const selectedQuestions = shuffledQuestions.slice(0, 20);

        setQuizData(selectedQuestions);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + quizData[currentQuestion].difficulty);
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    } else {
      setShowWrongMessage(true);
    }

    setUserAnswers([...userAnswers, { selectedAnswer, isCorrect }]);

    // Move to the next question or show results if it's the last question
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowWrongMessage(false);
    } else {
      setShowResults(true);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowWrongMessage(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setShowWrongMessage(false);
    setScore(0);
    setCorrectAnswersCount(0);
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      {showResults ? (
        // Display results
        <QuizResultPage
          userAnswers={userAnswers}
          quizData={quizData}
          resetQuiz={resetQuiz}
          score={score}
          correctAnswersCount={correctAnswersCount}
        />
      ) : (
        // Display quiz questions
        <div className="w-96 p-8 mt-48 bg-white rounded-md shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            Quiz Question {currentQuestion + 1}
          </h2>
          <p>{quizData[currentQuestion]?.text}</p>
          <div className="mt-4">
            {quizData[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="bg-blue-500 text-white flex flex-col w-full items-center py-2 px-4 mr-4 mb-4 rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
          {showWrongMessage && (
            <p className="text-red-500 font-bold mt-4">
              Incorrect answer. Try again!
            </p>
          )}
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPrevQuestion}
              className="bg-red-400 text-white py-2 px-4 rounded-lg"
            >
              Previous Question
            </button>
            <button
              onClick={resetQuiz}
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              {currentQuestion < quizData.length - 1 ? "Reset" : "Finish"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
