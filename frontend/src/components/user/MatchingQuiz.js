import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MatchingQuiz.css'; // Import CSS file for styling

// Sample data for quizzes (this should be fetched from an API or passed via props)
const sampleQuizData = {
  matchQuiz: [
    {
      question: 'Match the capital of France',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris',
      userAnswer: null, // Track the user's answer
    },
    {
      question: 'Match the capital of Italy',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Rome',
      userAnswer: null, // Track the user's answer
    },
  ],
};

const MatchingQuiz = () => {
  const { quizId } = useParams(); // Get the quizId from the URL
  const [quizData, setQuizData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [feedback, setFeedback] = useState(null); // Show feedback after each choice

  useEffect(() => {
    // Fetch quiz data based on quizId (or use static data as a fallback)
    if (quizId) {
      // In this case, we're just using static data, but this can be replaced by an API call.
      setQuizData(sampleQuizData.matchQuiz);
    }
  }, [quizId]);

  if (!quizData) {
    return <div>Loading quiz...</div>; // Show loading state while data is being fetched
  }

  const handleOptionClick = (option, index) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[index].userAnswer = option; // Update the user's selected answer

    setQuizData(updatedQuizData);

    // Check if the answer is correct
    const correctAnswer = updatedQuizData[index].answer;
    if (option === correctAnswer) {
      setFeedback({ message: 'Correct!', isCorrect: true });
    } else {
      setFeedback({ message: 'Incorrect. Try again.', isCorrect: false });
    }

    setSelectedOption(option); // Update the selected option
  };

  return (
    <div>
      <h2>Matching Quiz</h2>
      {quizData.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <ul>
            {item.options.map((option, idx) => (
              <li
                key={idx}
                className={`option-item ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option, index)}
                style={{ cursor: 'pointer' }} // Make the options clickable
              >
                {option}
              </li>
            ))}
          </ul>
          {item.userAnswer && (
            <p>
              {item.userAnswer === item.answer
                ? 'Correct answer!'
                : `Incorrect! Correct answer: ${item.answer}`}
            </p>
          )}
        </div>
      ))}
      {feedback && <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>{feedback.message}</div>}
    </div>
  );
};

export default MatchingQuiz;
