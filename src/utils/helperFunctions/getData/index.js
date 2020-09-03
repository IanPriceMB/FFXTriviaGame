import { basicFetch } from '..';

/**
 * GET call
 * @param {string} endpoint - the endpoint to hit
 */
export default (endpoint) => basicFetch(endpoint, { method: 'GET' }) 

