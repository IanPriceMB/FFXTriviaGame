import { basicFetch } from '..';

/**
 * POST call
 * @param {string} endpoint - the endpoint to hit
 * @param {object} data - body
 */
export default (endpoint, data) => {
  return basicFetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }) 
}
