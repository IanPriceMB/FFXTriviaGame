import {
  SET_TIMER,
  UPDATE_TIMER,
  STOP_TIMER,
} from './enums';
import { actionFactory } from '../../utils/helperFunctions';

export const setTimer = actionFactory(SET_TIMER);

export const updateTimer = actionFactory(UPDATE_TIMER);

export const stopTimer = actionFactory(STOP_TIMER);