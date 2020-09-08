import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
const BRouter = () => (
    <BrowserRouter><App/></BrowserRouter>
);
ReactDOM.render(<BRouter />, document.getElementById('root'));
registerServiceWorker();
