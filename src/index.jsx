import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';

// Include context component.
import { GlobalStateProvider } from './context/Context';

ReactDOM.render(
  <GlobalStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStateProvider>,
  document.getElementById('root')
);
