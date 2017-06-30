import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    url='/api/appointments' />,
  document.getElementById('root')
);
registerServiceWorker();
