import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './notification';
import questionReducer from './question';
import answerReducer from './answer';
import scoreReducer from './score';
import timerReducer from './timer';

const initialState = {};

const middleware = [thunk]

const rootReducer = combineReducers({
  notification: notificationReducer,
  question: questionReducer,
  answer: answerReducer,
  score: scoreReducer,
  timer: timerReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;