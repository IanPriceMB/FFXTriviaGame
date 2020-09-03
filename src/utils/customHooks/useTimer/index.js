import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTimer, stopTimer } from '../../../redux/timer/actions';

export default (startingTime) => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(startingTime);
  const { isActive } = useSelector(({ timer }) => timer);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds <= 0) {
      clearInterval(interval);
      dispatch(stopTimer());
    } else if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      dispatch(updateTimer({ seconds }))
    } 

    return () => {
      clearInterval(interval);
      if (seconds <= 0) dispatch(stopTimer());
    };
  }, [isActive, seconds, dispatch]);

  return seconds;
}