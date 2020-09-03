import { useEffect } from 'react';

export default (refOne, refTwo, cb) => {
  // If a user clicks outside of the menu
  useEffect(() => {

    document.addEventListener('click', event =>  {
      if (refOne.current 
        && !refOne.current.contains(event.target) 
        && refTwo.current
        && !refTwo.current.contains(event.target)
        ) {
          refOne.current.classList.remove('menu__nav--open');
          cb();
      };
    });

    return document.removeEventListener('click', event =>  {
      if (refOne.current 
        && !refOne.current.contains(event.target) 
        && refTwo.current
        && !refTwo.current.contains(event.target)
        ) {
          refOne.current.classList.remove('menu__nav--open');
          cb();
      };
    });
  }, [refOne, refTwo, cb]);
};