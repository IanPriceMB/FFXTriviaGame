import { useEffect, useState, useRef } from 'react';
import { getData } from '../../fetch';
import { useNotificationAction } from '../../storeHooks/useNotificationStore';

export default (endpoint, message) => {
  const { errorMessage } = useNotificationAction();
  const errorMessageRef = useRef();
  errorMessageRef.current = errorMessage;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, toggleRefresh] = useState(true);
  
  const handleRefresh = () => toggleRefresh(!refresh);
  
  useEffect(() => {
    let current = true;

    (async() => {
      try {
        setIsLoading(true)
        const res = await getData(endpoint);
        const data = await res.json();
        if(current) setData(data);
      } catch (e) {
        console.error(e);
        setError(true);
        errorMessageRef.current(message);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      current = false;
    }
  }, [endpoint, setData, refresh, message, errorMessageRef]);

  return [data, isLoading, error, handleRefresh];
};