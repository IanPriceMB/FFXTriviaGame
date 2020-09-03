import React from 'react';
import { useSelector } from 'react-redux';
import { useImageFetch } from '../../utils/customHooks';
import './index.scss';

/**
 * Splash image display
 */
export default () => {
  const { level } = useSelector(({ question }) => question);
  
  const endpoint = `/images/${level}.png`;
  const [loading, splash] = useImageFetch(endpoint);

  if (loading || !splash) return 'No image...';
  return <img className="splash" src={splash} alt="Level Splash Screen" />
};