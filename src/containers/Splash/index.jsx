import React from 'react';
import { useFetchImage } from '../../utils/customHooks';
import { useGameStateStore } from '../../utils/storeHooks/useGameStateStore';
import './index.scss';

export default () => {
  const { level } = useGameStateStore();  
  const [splash, isLoading, error] = useFetchImage(`/images/${level}.png`);

  if (isLoading || !splash) return 'No image...';
  if (error) return 'Error loading the image.';
  return <img className="splash" src={splash} alt="Level Splash Screen" />
};