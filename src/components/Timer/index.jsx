import React from 'react';
import { useTimer } from '../../utils/customHooks';
import './index.scss';

/**
 * Displays a timer
 * @param {number} initialTime - question duration
 */
export default ({ initialTime }) => {
  const timer = useTimer(initialTime);

  return <div className="timer">Remaining Time: {timer}</div>
};