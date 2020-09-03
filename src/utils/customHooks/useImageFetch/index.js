import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendErrorMessage } from '../../../redux/notification/actions';
import { getData } from '../../helperFunctions';


export default (endpoint) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [splash, setSplash] = useState();

  useEffect(() => {
    setLoading(true);
    const getSplash = async () => {
      try {
        const res = await getData(endpoint);
        const blob = await res.blob();
        const image = URL.createObjectURL(blob)
        if (!blob) {
          dispatch(sendErrorMessage(`Error: blobless`));
        } else {
          setSplash(image)
        };
      } catch (error) {
        console.error(error);
        dispatch(sendErrorMessage(`Error: There was an error processing the data.`));
      } finally {
        setLoading(false)
      };
    };
    
    getSplash();
  }, [dispatch, endpoint])

  return [loading, splash];
}