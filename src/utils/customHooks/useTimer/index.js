import { useState, useEffect } from 'react';

export default (startingTime = 20) => {
  const [seconds, setSeconds] = useState(startingTime);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
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
  }, [isActive, seconds]);

  return [seconds, reset, toggle]
}