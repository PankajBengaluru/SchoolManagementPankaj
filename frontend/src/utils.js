// Example usage in a React component
import React from 'react';
import { formatDate, capitalize } from './utils';

const ExampleComponent = ({ date, text }) => {
  return (
    <div>
      <p>Formatted Date: {formatDate(date)}</p>
      <p>Capitalized Text: {capitalize(text)}</p>
    </div>
  );
};

export default ExampleComponent;
