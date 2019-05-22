import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './styles/default.css';

render(<App />, document.querySelector('#root'));

registerServiceWorker();
