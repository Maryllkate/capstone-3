import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import { Provider } from 'react-redux';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
import store from './store';
import App from './App';

const root = createRoot(document.getElementById('root')); // Create a root instance

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>
);

