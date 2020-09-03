import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Question, Answer, Timer } from '../../components';
import { useConditionalRedux } from '../../utils/customHooks';
import { nextQuestion, getQuestion } from '../../redux/question/actions';
import { fetchAnswer, clearAnswer } from '../../redux/answer/actions';
import {setTimer } from '../../redux/timer/actions';
import { updateScore } from '../../redux/score/actions';
import './index.scss';

/**
 * Game - handle major game logic
 */
export default () => {
  const dispatch = useDispatch();
  const { level, round, question, answers, nextLevel, nextRound, isLoading, questionTime } = useSelector(({ question }) => question);
  const { answer } = useSelector(({ answer }) => answer);
  const score = useSelector(({ score }) => score);

  /**
   * Handle player answer choice
   * @param {object} event 
   */
  const handleAnswerClick = async (event) => { 
    event.preventDefault();

    const option = event.target.dataset.option;
    dispatch(fetchAnswer(`/answers/${level}/${round}?option=${option}`));
  };

  // Every time level or round changes fetch the question
  const endPoint = `/questions/${level}/${round}`;
  useConditionalRedux(() => getQuestion(endPoint), {}, [endPoint], true);

  // Start the timer fresh for each question
  useConditionalRedux(setTimer, { questionTime }, [question], true);

  // When we get an answer back from the API update the score
  useConditionalRedux(updateScore, {level, answer}, [answer, level], answer);

  // Once the score is updated clear the answer
  useConditionalRedux(clearAnswer, {},  [score], true);

  // Once answer has been cleared fetch next question
  useConditionalRedux(nextQuestion, { nextLevel, nextRound }, [answer], (!answer && nextLevel && nextRound));

  // Full question functionality fufilled return to the top of the stack

  return (
    <div
      className="game"
      id="Game"
    >
      {!question || !answers || isLoading ? (
        'Loading next question...'
      ) :(
        <>
          <Question  questionText={question} />
          <Timer initialTime={questionTime} />
          {answers.map((answer, index) => (
            <Answer 
              identifyer={index}
              answerNumber={index + 1}
              handleAnswerClick={handleAnswerClick} 
              answer={answer}
              key={`answer-${index}`}
            />
          ))}
        </>
      )}
    </div>
  );
};