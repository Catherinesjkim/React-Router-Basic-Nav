import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Steps for implementing React Router - Major component called BrowserRouter wrapping the component Router that wraps component App. 

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
