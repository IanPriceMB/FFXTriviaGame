import { round } from 'lodash';
import React from 'react';
import { useEffect } from 'react';
import { Question, Answer, Timer } from '../../components';
import { useQuestion, useTimer } from '../../utils/customHooks';
import { useGameStateAction, useGameStateStore } from '../../utils/storeHooks/useGameStateStore';
import './index.scss';

/**
 * Game - handle major game logic
 */
export default () => {
  const { updateScore } = useGameStateAction();
  const { level } = useGameStateStore();

  // Get the next question
  const [ question, isQuestionLoading, questionError ] = useQuestion();

  // Start the timer fresh for each question
  const [ time, resetTimer, toggleTimer ] = useTimer(question && question.questionTime);

  // User Answers Question
  const handleAnswerClick = async (event) => { 
    event.preventDefault();
    const option = event.target.textContent.trim();
    const answer = question.answers.filter(answer => answer.text === option)[0].value;
    if (answer === 1) updateScore({ level, answer });
  };

  // Once answer has been cleared fetch next question

  // Full question functionality fufilled return to the top of the stack

  if (!question || isQuestionLoading) return 'Loading next question...';
  if (questionError) return 'Error occured while fetching the question';
  return (
    <div className="game" >
      <Question  questionText={question.question} />
      <Timer time={time} />
      {question.answers.map((answer, index) => (
        <Answer
          answerNumber={index + 1}
          answer={answer}
          handleAnswerClick={handleAnswerClick} 
          key={answer.text}
        />
      ))}
    </div>
  );
};