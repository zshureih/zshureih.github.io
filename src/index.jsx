import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

createRoot(document.getElementById('root')).render(
  <Router history={history}>
    <App />
  </Router>
);
