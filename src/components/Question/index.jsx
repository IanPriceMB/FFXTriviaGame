import React from 'react';
import './index.scss';

/**
 * Display the question
 */
export default ({ questionText }) => (
  <h3  
    className="question"
    id="Question"
  >
    {questionText}
  </h3>
);