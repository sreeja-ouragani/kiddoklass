import React, { useState } from 'react';

const FillBlankQuiz = () => {
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'The capital of India is __________.',
      correctAnswer: 'delhi',
    },
    {
      question: 'My father\'s brother is my __________.',
      correctAnswer: 'uncle',
    },
    {
      question: 'In Hindi, the word "friend" is __________.',
      correctAnswer: 'dost',
    },
    {
      question: 'The state of Telangana is in __________ India.',
      correctAnswer: 'south',
    },
    {
      question: '5 + 3 = __________.',
      correctAnswer: '8',
    },
    {
      question: 'The capital of Andhra Pradesh is __________.',
      correctAnswer: 'amaravati',
    },
    {
      question: 'In Telugu, the word "hello" is __________.',
      correctAnswer: 'namaskaram',
    },
  ];

  const currentQuestion = questions[questionIndex];

  const handleSubmit = () => {
    setCorrect(answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase());
  };

  const handleNext = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setAnswer('');
    setCorrect(null);
  };

  return (
    <div className="fill-blank-quiz">
      <h3>Fill in the blank</h3>
      <p>{currentQuestion.question}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer"
      />
      <button onClick={handleSubmit}>Submit</button>

      {correct !== null && (
        <div>
          {correct ? (
            <h4 className="correct">Correct! Well done!</h4>
          ) : (
            <h4 className="incorrect">Incorrect. Try again!</h4>
          )}
          <button onClick={handleNext}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default FillBlankQuiz;
