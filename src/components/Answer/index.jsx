import React from 'react';
import './index.scss';

export default ({ answerNumber, handleAnswerClick, answer }) => (
  <div className="answer">
    <label htmlFor={`AnswerButton-${answerNumber}`}>
      {answerNumber}
    </label>
    <button onClick={handleAnswerClick} className="answer__answer-button" id={`AnswerButton-${answerNumber}`}>
      {answer.text}
    </button>
  </div>
)