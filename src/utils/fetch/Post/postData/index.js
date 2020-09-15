import { basicFetch } from '../..';

export default (endpoint, data) => {
  return basicFetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }) 
}
