// QuizResultPage.js
import React from 'react';

const QuizResultPage = ({ userAnswers, quizData, resetQuiz }) => {
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.isCorrect) {
        score += quizData[index].difficulty;
      }
    });
    return score;
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-md shadow-md text-center">
      <h2 className="text-3xl font-bold mb-6">Quiz Results</h2>
      <p className="text-xl mb-4">Your Score: {calculateScore()}</p>
      <p className="text-xl mb-4">Correct Answers: {userAnswers.filter(answer => answer.isCorrect).length}</p>
      <ol className="text-left mb-6">
        {quizData.map((question, index) => (
          <li key={index} className="mb-2">

            <span className="font-bold">{index+1}{") "}{question.question}</span> - Your Answer: {userAnswers[index].selectedAnswer}{' '}
            {userAnswers[index].isCorrect ? '(Correct)' : '(Wrong)'}
          </li>
        ))}
      </ol>
      <button onClick={resetQuiz} className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Retake Quiz
      </button>
    </div>
  );
};

export default QuizResultPage;