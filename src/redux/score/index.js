import {
  SET_SCORE,
} from './enums';

const initialState = {
  besaid: 0,
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_SCORE:
      const { level, answer } = payload;
      return {
        ...state,
        [level]: answer ? state[level] + 1 : state[level]
      };
    default:
      return state;
  };
};