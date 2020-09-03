import {
  SET_TIMER,
  UPDATE_TIMER,
  STOP_TIMER,
} from './enums';

const initialState = {
  isActive: false,
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_TIMER:
      return {
        ...state,
        isActive: true,
        remainingTime: payload.seconds,
      };
    case UPDATE_TIMER:
      return {
        ...state,
        remainingTime: payload.seconds,
      };
    case STOP_TIMER:
      return {
        ...state,
        isActive: false,
      }
    default:
      return state;
  };
};