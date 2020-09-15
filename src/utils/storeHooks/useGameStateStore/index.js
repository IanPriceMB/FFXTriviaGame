import { storeFactory } from '../../helperFunctions';
import gameStateReducer, { initialState } from './reducer';
import actionHookBuilder from './actionHookBuilder';

const [
  GameStateProvider,
  useGameStateStore,
  useGameStateDispatch,
] = storeFactory(gameStateReducer, initialState);

const useGameStateAction = actionHookBuilder(useGameStateDispatch);

export { GameStateProvider, useGameStateStore, useGameStateAction };