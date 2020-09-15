import {
  SET_SCORE,
  SET_LEVEL,
  SET_ROUND,
} from './enums';

export const initialState = {
  besaid: [],
  level: 'besaid',
  round: 0,
  numQuestions: null,
  nextLevel: null,
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_SCORE:
      const { level, answer } = payload;
      return {
        ...state,
        [level]: [...state[level], answer]
      };
    case SET_LEVEL:
      return {
        ...state,
        level: payload
      };
    case SET_ROUND:
      return {
        ...state, 
        round: state.round + 1
      }
    default:
      return state;
  };
};