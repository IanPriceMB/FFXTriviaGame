import { storeFactory } from '../../helperFunctions';
import notificationReducer, { initialState } from './reducer';
import actionHookBuilder from './actionHookBuilder';

const [
  NotificationProvider,
  useNotificationStore,
  useNotificationDispatch,
] = storeFactory(notificationReducer, initialState);

const useNotificationAction = actionHookBuilder(useNotificationDispatch);

export { NotificationProvider, useNotificationStore, useNotificationAction };