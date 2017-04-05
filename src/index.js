import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import Tether from 'tether'
// why do you have to scroll
document.addEventListener('DOMContentLoaded', function(event) {
  new Tether({
    element: '.comments',
    target: '.picture',
    attachment: 'top right',
    targetAttachment: 'top left'
  })

  new Tether({
    element: '.yellowBox',
    target: '.greenBox',
    attachment: 'top right',
    targetAttachment: 'bottom left'
  })
})
