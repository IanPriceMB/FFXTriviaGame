import {
  SET_ANSWER,
  SET_ANSWER_LOADING,
  CLEAR_ANSWER,
} from './enums';
import { actionFactory, fetchActionFactory } from '../../utils/helperFunctions';

export const setAnswer = actionFactory(SET_ANSWER);

export const answerLoading = actionFactory(SET_ANSWER_LOADING);

export const clearAnswer = actionFactory(CLEAR_ANSWER);

export const fetchAnswer = fetchActionFactory(setAnswer, answerLoading);
