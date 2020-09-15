import React from 'react';
import { Question, Answer, Timer } from '../../components';
import { useQuestion, useQuestionTimer } from '../../utils/customHooks';
import { useGameStateAction, useGameStateStore } from '../../utils/storeHooks/useGameStateStore';
import './index.scss';

/**
 * Game - handle major game logic
 */
export default () => {
  const { updateScore, nextRound } = useGameStateAction();
  const { level } = useGameStateStore();

  const [ question, isQuestionLoading, questionError ] = useQuestion();

  const time = useQuestionTimer();

  const handleAnswerClick = async (event) => { 
    event.preventDefault();

    const option = event.target.textContent.trim();
    const answer = question.answers.filter(answer => answer.text === option)[0].value;
    if (answer === 1) updateScore({ level, answer });
    nextRound();
  };

  if (!question || isQuestionLoading) return 'Loading next question...';
  if (questionError) return 'Error occured while fetching the question.';
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