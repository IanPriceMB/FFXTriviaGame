import { useEffect, useState, useRef } from 'react';
import { getData } from '../../fetch';
import { useNotificationAction } from '../../storeHooks/useNotificationStore';

export default (endpoint, message) => {
  const { errorMessage } = useNotificationAction();
  const errorMessageRef = useRef();
  errorMessageRef.current = errorMessage;

  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, toggleRefresh] = useState(true);
  
  const handleRefresh = () => toggleRefresh(!refresh);
  
  useEffect(() => {
    let current = true;
    let imgUrl;
    (async() => {
      try {
        setIsLoading(true)
        const res = await getData(endpoint);
        const blob = await res.blob();
        imgUrl = URL.createObjectURL(blob);
        if(current) setImage(imgUrl);
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
      URL.revokeObjectURL(imgUrl);
    }
  }, [endpoint, setImage, refresh, message, errorMessageRef]);

  return [image, isLoading, error, handleRefresh];
};