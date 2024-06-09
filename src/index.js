import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const lastVisitedPage = localStorage.getItem("lastVisitedPage");

ReactDOM.render(
  <Router basename="/Mon-Portfolio">
    <App />
  </Router>,
  document.getElementById('root')
);

if (lastVisitedPage) {
  window.location.href = lastVisitedPage;
}
