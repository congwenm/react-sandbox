import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import Tether from 'tether'
import Shepherd from 'tether-shepherd'
import 'tether-shepherd/dist/css/shepherd-theme-arrows.css'

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

  let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-arrows'
    }
  })

  tour.addStep('example', {
    title: 'Example Shepherd',
    text: 'Creating a Shepherd is easy too! Just create ...',
    attachTo: '.hero-example bottom',
    advanceOn: '.docs-link click'
  })
  tour.addStep('example', {
    title: 'Example Shepherd 2',
    text: 'Step 2',
    attachTo: '.hero-example bottom',
    advanceOn: '.docs-link click'
  })

  tour.start()
})
