import React from 'react';
import './index.scss';

/**
 * Display one answer option
 * @param {string||number} identifyer - a unique something
 * @param {number} answerNumber - which question is which
 * @param {function} handleAnswerClick - when you click an answer button
 * @param {string} answer - answer option
 */
export default ({ identifyer, answerNumber, handleAnswerClick, answer }) => (
  <div
    className="answer"
    id={`Answer-${identifyer}`}
  >
    <label htmlFor={`AnswerButton-${identifyer}`}>
      {answerNumber}
    </label>
    <button 
      onClick={handleAnswerClick}
      className="answer__answer-button"
      data-option={answer.a}
      id={`AnswerButton-${identifyer}`}
    >
      {answer.a}
    </button>
  </div>
)