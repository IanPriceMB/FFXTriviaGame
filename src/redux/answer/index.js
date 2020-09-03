import {
  SET_ANSWER,
  CLEAR_ANSWER,
  SET_ANSWER_LOADING,
} from './enums';

const initialState = {
  answer: null,
  isLoading: false,
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_ANSWER:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_ANSWER:
      return {
        ...initialState,
      };
    case SET_ANSWER_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state;
  };
};