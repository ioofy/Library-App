import ReactDOM from 'react-dom';
import App from './router/App';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);
