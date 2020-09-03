import {
  SET_QUESTION,
  NEXT_QUESTION,
  SET_QUESTION_LOADING,
} from './enums';

const initialState = {
  question: null,
  answers: [],
  level: 'besaid',
  round: '0',
  isLoading: false,
  questionTime: 20,
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_QUESTION:
      return {
        ...state,
        ...payload,
      };
    case NEXT_QUESTION:
      const { nextLevel, nextRound } = payload;
      return {
        ...state,
        level: nextLevel,
        round: nextRound,
      }
    case SET_QUESTION_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state;
  };
};