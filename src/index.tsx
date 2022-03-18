import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,

  document.getElementById('root')
);
