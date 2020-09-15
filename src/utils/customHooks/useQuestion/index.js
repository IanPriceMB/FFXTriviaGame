import React from 'react';
import { useFetch } from '..'
import { useGameStateStore } from '../../storeHooks/useGameStateStore';

export default () => {
  const { level, round } = useGameStateStore();
  const endPoint = `/questions/${level}/${round}`;
  const [ data, isLoading, error ] = useFetch(endPoint, null, 'Failed to load the question.');

  return [ data, isLoading, error ];
};