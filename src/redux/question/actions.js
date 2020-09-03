import {
  SET_QUESTION,
  SET_QUESTION_LOADING,
  NEXT_QUESTION,
} from './enums';
import { actionFactory, fetchActionFactory } from '../../utils/helperFunctions';

export const setQuestion = actionFactory(SET_QUESTION);

export const questionLoading = actionFactory(SET_QUESTION_LOADING);

export const nextQuestion = actionFactory(NEXT_QUESTION);

export const getQuestion = fetchActionFactory(setQuestion, questionLoading);