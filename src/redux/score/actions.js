import {
  SET_SCORE,
} from './enums';
import { actionFactory } from '../../utils/helperFunctions';

export const updateScore = actionFactory(SET_SCORE);