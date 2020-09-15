import { useEffect, useRef } from 'react';

export default (refOne, refTwo, cb) => {
  const cbRef = useRef();
  cbRef.current = cb;

  useEffect(() => {

    const handleClickOutside = e => {
      if (refOne.current && refTwo.current && cbRef.current
        && !refOne.current.contains(e.target)
        && !refTwo.current.contains(e.target)
      ) {
        cbRef.current(e);
      };
    };  

    document.addEventListener('click', handleClickOutside, true);

    return () => { 
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [refOne, refTwo, cbRef]);
};