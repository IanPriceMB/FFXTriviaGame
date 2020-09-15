import { useEffect } from 'react';
import useQuestion from '../useQuestion';
import useTimer from '../useTimer';

export default () => {
  const [question, isLoading, error ] = useQuestion();
  const [time, start, stop, reset] = useTimer(20);
  
  if (error) { stop(); reset(); };
  useEffect(() => {
    if (isLoading) { reset(); };
    if (question) { start(); };
  }, [question, start, isLoading, reset])

  return time;
}