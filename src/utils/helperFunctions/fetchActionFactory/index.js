import { sendErrorMessage } from '../../../redux/notification/actions';
import { getData } from '..';

/**
 * Create async redux actions with error handeling dynamically
 * @param {function} action - Redux function that returns an object
 * @returns {function} - "named" Redux action
 */
export default (action, loadingAction) => {

  /**
   * An async Redux action (handled by thunk)
   * @param {string} endpoint - the endpoint to hit on the fetch call
   * @returns {function} - async function that gets passed dispatch from thunk
   */
  return (endpoint) => {
    
    /**
     * A regular async function that writes to the store
     * @param {function} - Redux dispatch function
     */
    return async (dispatch) => {
      dispatch(loadingAction(true));
      try {
        const res = await getData(endpoint);
        const data = await res.json();

        if (data.error) {
          dispatch(sendErrorMessage(`Error: ${data.error}`));
        } else {
          dispatch(action({ ...data }));
        };

      } catch (error) {

        console.error(error);
        dispatch(sendErrorMessage(`Error: There was an error processing the data.`));
        
      } finally {
        dispatch(loadingAction(false));
      };
    };
  };
};