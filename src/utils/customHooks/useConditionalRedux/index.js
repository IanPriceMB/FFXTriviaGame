import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default (action, payload, dependancies, conditional) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (conditional) {
      dispatch(action(payload));
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, ...dependancies])
}