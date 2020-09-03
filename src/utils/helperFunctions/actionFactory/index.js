/**
 * Generate Redux actions dynamically
 * @param {string} type - Redux type
 * @returns {function} - Redux action
 */
export default type => payload => ({ type, payload });