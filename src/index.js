import React from 'react';
import ReactDOM from 'react-dom';

const list =
React.createElement('h1', {}, 'My favorite ice cream flavors'),
  React.createElement('ul', {},
    [
      React.createElement('li', {}, 'Chocolate'),
      React.createElement('li', {}, 'Vanilla')
    ]
  )
);

ReactDOM.render(
  list,
  document.getElementById('global')
);
