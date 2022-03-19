import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from 'app/store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
