import {
  SET_SCORE,
  SET_LEVEL,
  SET_ROUND,
} from './enums';
import { actionFactory } from '../../helperFunctions';

export default (useGameStateDispatch) => () => {
  const dispatch = useGameStateDispatch();

  const updateScore = (payload) => dispatch(actionFactory(SET_SCORE)(payload));

  const setLevel = (payload) => dispatch(actionFactory(SET_LEVEL)(payload));

  const nextRound = (payload) => dispatch(actionFactory(SET_ROUND)(payload));

  return { updateScore, setLevel, nextRound };
};

