import { useState, useEffect } from 'react';

export default (startingTime) => {
  const [seconds, setSeconds] = useState(startingTime);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
  }

  function stop() {
    setIsActive(false);
  }

  function reset() {
    setSeconds(startingTime);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds <= 0) {
      clearInterval(interval);
      setIsActive(false);
    } else if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } 
    
    return () => clearInterval(interval);
  }, [isActive, seconds,setSeconds]);

  return [seconds, start, stop, reset]
}